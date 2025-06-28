// main.js
// Markdown記事を読み込んでHTMLに変換して表示
fetch('posts/about.md')
    .then(res => res.text())
    .then(md => {
        document.getElementById('content').innerHTML = marked.parse(md);
    });