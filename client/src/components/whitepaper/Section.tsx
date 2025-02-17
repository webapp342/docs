[\s\S]*?```)/);

    return parts.map((part, index) => {
      if (part.startsWith('```') && part.endsWith('```')) {
        // This is a code block - remove the backticks and language identifier
        const codeContent = part
          .slice(3, -3) // Remove opening and closing