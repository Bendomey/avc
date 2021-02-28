import * as React from "react";
import { Tag } from "../../shared/interfaces/tag";
import ExternalLink from "../atoms/external-link";

interface Props {
  tag: Tag;
}

const ResourceMenu: React.FC<Props> = ({ tag }) => {
  return (
    <React.Fragment>
      <ExternalLink
        href={`https://africanventurecounsel.com/tags/${tag?.name}`}
        className="group flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50"
      >
        <span className="truncate">{tag?.name}</span>
      </ExternalLink>
    </React.Fragment>
  );
};

export default ResourceMenu;
