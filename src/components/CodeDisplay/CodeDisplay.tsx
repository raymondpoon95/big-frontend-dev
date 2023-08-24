import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { BiSolidCopy, BiCheck } from "react-icons/bi";

type Props = {
  code: string;
  language?: string;
};

const CodeDisplay = ({ code, language = "tsx" }: Props) => {
  const [copy, setCopy] = useState<boolean>(false);

  return (
    <div className="code-display">
      <div className="code-display__header-container">
        <span className="header-container__solution">Solution</span>
        <button
          onClick={() => {
            navigator.clipboard.writeText(code);
            setCopy(true);
          }}
        >
          {!copy ? (
            <>
              <BiSolidCopy />
              Copy
            </>
          ) : (
            <>
              <BiCheck />
              Copied!
            </>
          )}
        </button>
      </div>
      <SyntaxHighlighter
        language={language}
        style={oneDark}
        showLineNumbers
        showInlineLineNumbers
        wrapLines
        wrapLongLines
        startingLineNumber={0}
        customStyle={{
          padding: "1rem",
          margin: "0",
          overflow: "auto",
          borderRadius: "0",
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeDisplay;
