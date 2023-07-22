const paragraphs: string[] = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    
    // Add more paragraphs as needed
  ];
  
  export function getRandomParagraph(): string {
    const randomIndex = Math.floor(Math.random() * paragraphs.length);
    return paragraphs[randomIndex];
  }
  