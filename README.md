# Aev0rnJP AI Hub

**日本語の説明はこちらです。** 詳しい説明は [日本語版 README](README.ja.md) をご覧ください。  
**English documentation:** [README in English](README.en.md)

スマートフォンと PC に対応した、ダークテーマのブラウザー向け AI ワークスペースです。GitHub Pages で公開できる静的 Web アプリとして構成されています。

## 主な機能

- WebGPU 対応環境でのブラウザー内 AI チャット（WebLLM）
- コードの作成・編集、コピー、ファイル保存
- テキスト、Markdown、CSV、JSON、ソースコードなどのファイル閲覧
- PDF.js を利用した PDF のテキスト抽出
- DuckDuckGo または Google を開く Web 検索
- 任意のチャット履歴保存と JSON エクスポート
- PWA マニフェスト、Service Worker によるアプリ画面のキャッシュ
- スマートフォン・PC 向けのレスポンシブ表示
- 画像生成機能および独自バックエンドはありません

## GitHub Pages で公開する方法

1. GitHub リポジトリの **Settings → Pages** を開きます。
2. **Build and deployment** の **Source** で **Deploy from a branch** を選びます。
3. Branch を **main**、フォルダーを **/(root)** に設定して保存します。
4. デプロイ完了後、Pages 設定画面に表示された URL を開きます。

## 動作上の注意

AI チャットには WebGPU 対応ブラウザーと十分なメモリーが必要です。初回は外部 CDN やモデル配信元からライブラリー・AI モデルをダウンロードするため、時間がかかることがあります。完全なオフライン動作は保証されません。

Web 検索は外部検索エンジンを開く機能であり、検索結果の自動取得・要約は行いません。PDF の読み込みには初回に PDF.js のオンライン取得が必要で、スキャン画像の OCR は行いません。AI の回答は誤ることがあるため、重要な情報は確認してください。

## ドキュメント

- [日本語版 README（詳細）](README.ja.md)
- [English README](README.en.md)
