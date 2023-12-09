import fs from 'fs';

/**
 * Convert Markdown images to Hugo syntax and save to a new file
 */
export function convertAndSaveToHugoFile(markdownContent, originalFilePath) {
  const imageRegex = /!\[.*?\]\((.*?)\)/g;
  const hugoContent = markdownContent.replace(imageRegex, '{{< image src="$1" >}}');
  const hugoFilePath = originalFilePath.replace('.md', '_hugo.md'); // Adjust the new file name as needed
  fs.writeFileSync(hugoFilePath, hugoContent, 'utf-8');
  console.log(`Hugo content saved to: ${hugoFilePath}`);
  
  return hugoFilePath;
}
