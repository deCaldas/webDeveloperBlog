
import { allBlogs } from './.contentlayer/generated/index.mjs';
import { sortPosts } from 'pliny/utils/contentlayer.js';

const sorted = sortPosts(allBlogs);

console.log("Top 5 posts:");
sorted.slice(0, 5).forEach(post => {
    console.log(`${post.date} - ${post.title}`);
});

const missingTitles = [
    "Diferencia entre THAT y WHAT",
    "Than vs. Then: Comparing and Sequencing",
    "That and What: Pointing and Defining"
];

console.log("\nChecking for missing posts:");
missingTitles.forEach(title => {
    const found = sorted.find(p => p.title === title);
    if (found) {
        console.log(`[FOUND] ${found.date} - ${found.title}`);
    } else {
        console.log(`[MISSING] ${title}`);
    }
});
