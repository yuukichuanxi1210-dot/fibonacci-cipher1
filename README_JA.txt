FIBONACCI CIPHER — PWA版

内容
- index.html: アプリ本体
- manifest.webmanifest: ホーム画面追加用設定
- sw.js: オフラインキャッシュ
- icon.svg: アプリアイコン

公開方法
1. このフォルダ内の4ファイルを、HTTPSで配信できる静的ホスティングへアップロードします。
2. 発行されたHTTPS URLをiPhoneのSafariで開きます。
3. 共有ボタン →「ホーム画面に追加」→「追加」。
4. ホーム画面のFIBONACCI CIPHERから起動します。

重要
- ローカルファイルを直接開くだけではPWA機能やWeb Cryptoが動作しない場合があります。HTTPSで公開してください。
- Fibonacci Auto / Keyedは教育・パズル用であり、安全な暗号ではありません。
- Secure ModeはWeb Crypto APIのAES-256-GCM、PBKDF2-HMAC-SHA256（600,000回）を使用します。
- 本アプリは入力内容をサーバーへ送信しません。処理はブラウザ内で行います。
- 本PWAはFlutter版のFC1-S形式との互換性を意図していますが、異なるブラウザ/実装間の正式な相互運用テストは未実施です。
- 実機での動作・暗号レビュー・セキュリティ監査は未実施です。機密性が重要なデータの保護用途には、監査済みの暗号化製品を使用してください。
