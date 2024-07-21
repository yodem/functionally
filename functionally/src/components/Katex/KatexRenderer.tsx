// components/KaTeXRenderer.js or .tsx
import React from 'react';
import katex from 'katex';
import 'katex/dist/katex.min.css';

type KaTeXRendererProps = {
    math: string;
    displayMode?: boolean;
};

const KaTeXRenderer: React.FC<KaTeXRendererProps> = ({ math, displayMode = false }) => {
    const html = katex.renderToString(math, {
        throwOnError: false,
        displayMode: displayMode,
    });

    return <span dangerouslySetInnerHTML={{ __html: html }} />;
};

export default KaTeXRenderer;
