# Cloudflare Worker 自動デプロイ

GitHub Actions ワークフロー `.github/workflows/deploy-cloudflare-worker.yml` は、`cloud-worker/` の変更時、または Actions 画面から手動実行したときに Worker をデプロイします。

## 最初に一度だけ必要な設定

GitHub リポジトリの **Settings → Secrets and variables → Actions → New repository secret** で、次の2つを登録します。

- `CLOUDFLARE_API_TOKEN`: Cloudflare で Worker のデプロイ権限を持つ API Token
- `CLOUDFLARE_ACCOUNT_ID`: Cloudflare アカウント ID

値は公開ファイルやコードに書かないでください。

## デプロイと接続

1. GitHub リポジトリの **Actions → Deploy Cloudflare AI Worker → Run workflow** を実行します。
2. 成功したら Cloudflare の Worker `aev0rn-jp-ai-hub` の URL を確認します。
3. AI Hub の「モデル・設定」に `https://<Workerのホスト名>/chat` を登録し、「接続テスト」を実行します。

## 注意

このワークフローはデプロイを自動化しますが、Cloudflare アカウントの初回認証・API Token の作成・GitHub Secrets への登録を代行するものではありません。認証情報なしで公開サイトから安全に Worker を作成することはできません。
