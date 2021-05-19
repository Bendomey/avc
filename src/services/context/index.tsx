import React, {
  Fragment,
  useReducer,
  useEffect,
  useMemo,
  createContext,
} from "react";

import ClientApollo from "../graphql";
import Auth from "../cookie.config";
import { LoadMe } from "./loader";

import { SettingsConfig } from "./app";
import { toaster } from "evergreen-ui";

interface ContextState {
  isLoading: boolean;
  isSignout: boolean;
  userToken: object;
}

interface authContextControllerProps {
  signIn: Function;
  signOut: Function;
}

export const AuthContext = createContext(
  [] as (ContextState | authContextControllerProps | any)[]
);

const Manipulator = (prevState: any, action: any) => {
  switch (action.type) {
    case "RESTORE_TOKEN":
      return {
        ...prevState,
        userToken: action.userToken,
        isLoading: false,
      };
    case "SIGN_IN":
      return {
        ...prevState,
        isSignout: false,
        userToken: action.userToken,
      };
    case "SIGN_OUT":
      return {
        ...prevState,
        isLoading: false,
        userToken: null,
        isSignout: true,
      };
    default:
      return prevState;
  }
};

function AppNavigator() {
  const [state, dispatch] = useReducer(Manipulator, {
    isLoading: true,
    isSignout: false,
    userToken: null,
  });

  useEffect(() => {
    let userToken: string | null = Auth.getCipher();
    let data: any;
    if (userToken) data = JSON.parse(userToken);
    else data = null;

    if (data) {
      getMe(data?.id)
        .then((res: any) => {
          if (res?.success) {
            return dispatch({
              type: "RESTORE_TOKEN",
              userToken: {
                ...res?.data,
                token: data?.token,
              },
            });
          } else {
            dispatch({ type: "SIGN_OUT" });
            toaster.notify(res?.errorMessage);
          }
        })
        .catch((errorHere) => {
          dispatch({ type: "SIGN_OUT" });
          toaster.notify("Something happened");
        });
    } else {
      dispatch({ type: "SIGN_OUT" });
    }
  }, []);

  const getMe = (id: string) => {
    return fetch(`${process.env.REACT_APP_SERVER_URL}/api/getuser`, {
      method: "GET",
      headers: {
        authorization: id,
      },
    }).then((res) => res.json());
  };

  const authContextController = useMemo(
    () => ({
      signIn: async (data: any): Promise<void> => {
        let newData = {
          token: data?.token,
          id: data?.user?.id,
        };
        Auth.setCipher(JSON.stringify(newData));
        dispatch({ type: "SIGN_IN", userToken: data });
      },
      signOut: (): void => {
        Auth.clearCipher();
        dispatch({ type: "SIGN_OUT" });
      },
    }),
    []
  );

  return (
    <Fragment>
      {state.isLoading ? (
        <LoadMe />
      ) : (
        <Fragment>
          <AuthContext.Provider value={[authContextController, state]}>
            <ClientApollo>
              <SettingsConfig />
            </ClientApollo>
          </AuthContext.Provider>
        </Fragment>
      )}
    </Fragment>
  );
}

export default AppNavigator;
