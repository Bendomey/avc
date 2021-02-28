import * as React from "react";

interface Props {
  href: string;
  className: string;
}

const ExternalLink: React.FC<Props> = ({ children, href, className }) => {
  return (
    <React.Fragment>
      <a href={href} target={"_blank"} rel="noreferrer" className={className}>
        {children}
      </a>
    </React.Fragment>
  );
};

export default ExternalLink;
