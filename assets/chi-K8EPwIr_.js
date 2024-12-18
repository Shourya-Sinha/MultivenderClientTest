const A="data:image/avif;base64,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";export{A as C};