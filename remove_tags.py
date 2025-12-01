import os
import re

def remove_tags_from_file(filepath, tags_to_remove):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    frontmatter_match = re.search(r'^---\n(.*?)\n---', content, re.DOTALL)
    if not frontmatter_match:
        return False

    frontmatter = frontmatter_match.group(1)
    
    tags_line_match = re.search(r'^tags:\s*\[(.*?)\]', frontmatter, re.MULTILINE)
    if not tags_line_match:
        return False

    tags_content = tags_line_match.group(1)
    
    # Split by comma, but be careful about empty strings if tags_content is empty
    if not tags_content.strip():
        return False

    current_tags_raw = tags_content.split(',')
    current_tags = []
    for t in current_tags_raw:
        t = t.strip()
        if t:
            # Remove quotes
            if (t.startswith("'") and t.endswith("'")) or (t.startswith('"') and t.endswith('"')):
                current_tags.append(t[1:-1])
            else:
                current_tags.append(t)
    
    new_tags = []
    modified = False
    for tag in current_tags:
        if tag.lower() not in tags_to_remove:
            new_tags.append(tag)
        else:
            modified = True
            
    if not modified:
        return False
        
    new_tags_str = ", ".join([f"'{t}'" for t in new_tags])
    new_tags_line = f"tags: [{new_tags_str}]"
    
    new_frontmatter = frontmatter.replace(tags_line_match.group(0), new_tags_line)
    new_content = content.replace(frontmatter, new_frontmatter)
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_content)
        
    return True

def main():
    root_dir = 'data/blog'
    tags_to_remove = {'key concept', 'feature'} 
    
    count = 0
    for root, dirs, files in os.walk(root_dir):
        for file in files:
            if file.endswith('.mdx'):
                filepath = os.path.join(root, file)
                try:
                    if remove_tags_from_file(filepath, tags_to_remove):
                        print(f"Updated {filepath}")
                        count += 1
                except Exception as e:
                    print(f"Error processing {filepath}: {e}")
    print(f"Total files updated: {count}")

if __name__ == "__main__":
    main()
