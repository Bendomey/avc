import { useQuery } from "@apollo/client";
import * as React from "react";
import { GET_TAGS } from "../../services/graphql/queries";
import {
  GetTagsInputProps,
  GetTagsOutputProps,
  Tag,
} from "../../shared/interfaces/tag";
import ResourceMenu from "./resource-menu";

const Resources = () => {
  const { data, loading } = useQuery<GetTagsOutputProps, GetTagsInputProps>(
    GET_TAGS,
    {
      variables: {
        limit: 8,
        skip: 0,
      },
    }
  );
  return (
    <React.Fragment>
      <p className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
        Resources
      </p>
      <div className="mt-3 space-y-2" aria-labelledby="communities-headline">
        {loading ? (
          <AlertResource description={"Loading..."} />
        ) : (
          <React.Fragment>
            {data ? (
              <React.Fragment>
                {data?.tagsLength === 0 ? (
                  <React.Fragment>
                    <AlertResource description={"No resources found"} />
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    {data?.tags?.map((tag: Tag, i: number) => (
                      <React.Fragment key={i}>
                        <ResourceMenu tag={tag} />
                      </React.Fragment>
                    ))}
                  </React.Fragment>
                )}
              </React.Fragment>
            ) : (
              <AlertResource
                description={"Oops, resources was not fetched..."}
              />
            )}
          </React.Fragment>
        )}
      </div>
    </React.Fragment>
  );
};

interface AlertProps {
  description: string;
}

const AlertResource: React.FC<AlertProps> = ({ description }) => {
  return (
    <span className="group flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md ">
      <span className="truncate">{description}</span>
    </span>
  );
};

export default Resources;
