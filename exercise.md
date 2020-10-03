# 演習課題

template/ ディレクトリにある To-do List にはいくつかの問題点があります。それを修正しましょう。

## 演習の概要

- このリポジトリをフォークしてクローンする
- 学籍番号のブランチを作成して切り替える
- `submit/` 内に学生番号(小文字)のディレクトリを作成
  - **自分の学生番号以外のディレクトリを削除しない**
- 上記で作成したディレクトリ内に、`template/` の中身をコピー
- [サーバーを起動](#%e3%82%b5%e3%83%bc%e3%83%90%e3%83%bc%e3%81%ae%e8%b5%b7%e5%8b%95%e6%96%b9%e6%b3%95)
- 「[修正内容](#%e4%bf%ae%e6%ad%a3%e5%86%85%e5%ae%b9)」を見て作業

### 修正後のリポジトリの構成例(学生番号がht99a999 の場合)


```bash
.
├── README.md
├── exercise.md
├── submit
│   └── ht99a999
│       ├── index.html
│       ├── main.js
│       ├── ress.css
│       └── style.css
└── template
    ├── index.html
    ├── main.js
    ├── ress.css
    └── style.css
```

## サーバーの起動方法

開発時には Web サーバーの起動が必要ですが、どんな方法で起動しても構いません。
ここでは、[Visual Studio Code](https://azure.microsoft.com/ja-jp/products/visual-studio-code/) を用いたサーバーの起動方法を紹介します。

- Visual Studio Code に `Live Server` という拡張機能を導入
  - Visual Studio Code の左側から拡張機能のタブを開いて検索

![install Live Server](https://i.imgur.com/gRO7bug.png)

- html ファイルが入っているディレクトリを Visual Studio Code で開く
  - ドラッグ & ドロップで開けます
- 右下の `Go Live` をクリックしてサーバーを起動
  - 起動時にポート番号が競合してなければ <http://localhost:5500/> でアクセス可能
  - 停止するには右下の `Port : xxxx` と書いてるところを選択

![server run](https://i.imgur.com/4sEmRsk.png)

## 修正内容

### [Delete selected items] ボタンから、関数 deleteSelected() を呼び出すようにする

![delete-selected](https://i.imgur.com/oyA5IkT.gif)

コピー直後のサイトにアクセスし、テキストボックスに適当な値を入力し [Add to-do] を押してデータを追加します。
追加されたら、項目の左側にチェックを入れて [Delete selected items] を押してみましょう。
現時点では削除されないことが確認できます。
これは、 deleteSelected() が呼び出されていないからです。
index.html にあるボタンから呼び出す処理を追加しましましょう。
修正が終わったら、コミットしましょう。

### 大見出しを中央揃えにする

![notcentering](https://i.imgur.com/neh9qyk.png)

大見出し (h1) が左側に寄っているので、 style.css で中央揃えにしましょう。
修正が終わったら、コミットしましょう。

### body に対して Google Fonts を導入する

![not Google Fonts](https://i.imgur.com/prNsBov.png)

デフォルトのフォントだとありきたりなので、変化を加えるために、Google Fonts から好きな日本語フォントを導入しましょう。
導入が終わったら、コミットしましょう。
