import { FunctionComponent } from 'react';

interface IframeComponentProps {
  iframeString: string;
}

const IframeComponent: FunctionComponent<IframeComponentProps> = ({ iframeString }) => {
  const createMarkup = () => {
    return { __html: iframeString };
  };

  return <div dangerouslySetInnerHTML={createMarkup()} />;
};

export default IframeComponent;
