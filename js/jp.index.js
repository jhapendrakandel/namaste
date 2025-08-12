
        // Menu data
        const menuData = {
            lunch: [
                { name: 'ランチセット', description: '① サラダ<br>② ナンまたはご飯<br>③ お好みのカレー1種類<br>[キーマエッグカレー、野菜カレー、チキンカレー、バターチキンカレー、ポテトとほうれん草カレー、豆カレー]', price: '¥850', image: 'Dishesh/Launch/lunch101.jpg' },
                { name: 'ナマステランチ', description: 'サラダ<br>ミニナン<br>ご飯(小)<br>チキンティッカ<br>チキンカレー<br>豆とトマトのカレー(バター風味)', price: '¥980', image: 'Dishesh/Launch/lunch102.jpg' },
                { name: 'ハッピーランチセット', description: '① サラダ<br>② タンドリーチキン<br>③ ご飯(小)<br>④ メインメニューからお好みのカレー1種類<br>⑤ メインメニューからお好みのナン1種類<br>⑥ マンゴーラッシー', price: '¥1500', image: 'Dishesh/Launch/lunch103.jpg' },
                { name: 'レディースランチ', description: '① サラダ<br>② ナンまたはご飯<br>③ カレーリストからお好みのカレー1種類<br>④ デザート', price: '¥850', image: 'Dishesh/Launch/lunch104.jpg' },
                { name: 'ネパールヒマラヤンスープカレーセット', description: '① サラダ<br>② 日本米またはバスマティライス<br>③ チキンミックススープカレー(鶏肉と各種野菜をヒマラヤンハーブとスパイスで味付け)', price: '¥990', image: 'Dishesh/Launch/lunch105.jpg' },
                { name: 'ポークカツカレーライス', description: '① ポークカツカレーライス<br>② サラダ', price: '¥900', image: 'Dishesh/Launch/lunch106.jpg' },
                { name: 'マトンほうれん草カレーライス', description: '① マトンほうれん草カレーライス<br>② サラダ', price: '¥900', image: 'Dishesh/Launch/lunch107.jpg' },
                { name: 'タンドリーチキン乗せ野菜カレー', description: '① 野菜カレー タンドリーチキンカレーライス<br>② サラダ', price: '¥1300', image: 'Dishesh/Launch/lunch108.jpg' },
                { name: 'タンドリーミックス', description: '① タンドリーチキン<br>② シシケバブ<br>③ チキンほうれん草ソーセージ', price: '¥980', image: 'Dishesh/Launch/lunch109.jpg' },
                { name: 'ランチタイムドリンク', description: 'オレンジジュース ¥+100<br>マンゴージュース ¥+100<br>ウーロン茶 ¥+100<br>アイスチャイ ¥+100<br>アイスコーヒー ¥+100<br>ラッシー ¥+100<br>ホットチャイ ¥+150<br>ホットコーヒー ¥+150<br>マンゴーラッシー ¥+150<br>生ビール ¥+490<br>インドビール ¥+600<br>ネパールビール ¥+600', price: '', image: 'Dishesh/Launch/drink.jpg' }
            ],

            special: [
                {
                    name: '[120分]食べ放題 (飲み放題は+1,500円で追加可能!)',
                    description: '[2名様以上] 1人¥2000<br>[アラカルト料理] グリーンサラダ、パパド(豆チップス)、アルコアチャール(ジャポニカサラダ)、サモサ、ミックスパコダ(スパイス野菜天ぷら)、シシケバブ、骨なしタンドリーチキン、エビカレー、半ドライチキンとナスカレー、ミックス野菜カレー、キーマエッグカレー、ひよこ豆とほうれん草カレー<br>[ナンとご飯] プレーンナン、ガーリックナン、オニオンナン、ご飯(日本米)、野菜ビリヤニ(炒めご飯)<br>[飲み放題内容] ※閉店30分前ラストオーダー。ハイボール、サントリーハイボール、ジムビームハイボール、角ハイボール、ザ・プレミアムモルツ、こだわり酒場のレモンサワー、トマトサワー、グレープフルーツサワー、ミドリジンソーダ、ワイン(赤/白)、焼酎(ロック/水割り/お湯割り)、梅酒(ロック/水割り/ソーダ割り)、ジントニック、カシスソーダ、カシスウーロン、カシスオレンジ、サントリーオールフリー、ホットチャイ、アイスチャイ、アイスコーヒー、ホットコーヒー、コーラ、ジンジャーエール、ウーロン茶、オレンジジュース、ラッシー。<br>★2名様以上でのご注文承ります。★サービス券・割引券はご利用いただけません。',
                    price: '1人¥2000',
                    image: 'Dishesh/special_1.jpg'
                },
                {
                    name: '2時間飲み放題コース',
                    description: '[2名様以上] 1人¥3,278<br>[アラカルト料理] サラダ、パパド(豆チップス)、サモサ、タンドリーチキン、シシケバブ、オニオン天ぷら、モモ<br>[カレー&ナン] チキンとナスカレー、ひよこ豆カレー、チーズナン、デザート<br>[飲み放題内容] ※閉店30分前ラストオーダー。ハイボール、サントリーハイボール、ジムビームハイボール、角ハイボール、ザ・プレミアムモルツ、こだわり酒場のレモンサワー、トマトサワー、グレープフルーツサワー、ミドリジンソーダ、ワイン(赤/白)、焼酎(ロック/水割り/お湯割り)、梅酒(ロック/水割り/ソーダ割り)、ジントニック、カシスソーダ、カシスウーロン、カシスオレンジ、サントリーオールフリー、ホットチャイ、アイスチャイ、アイスコーヒー、ホットコーヒー、コーラ、ジンジャーエール、ウーロン茶、オレンジジュース、ラッシー。<br>★2名様以上でのご注文承ります。★サービス券・割引券はご利用いただけません。',
                    price: '1人¥3,278',
                    image: 'Dishesh/special_2.jpg'
                },
                {
                    name: '[150分飲み放題付き] メイン料理を選べる◆ナマステプレミアムコース',
                    description: '[2名様以上] 1人¥4000<br>[アラカルト料理] サラダ、ガーリックケバブ、チキンとほうれん草シシケバブ、チキンパタゴ(フライドチキン)、枝豆、チョリソー​​ブロッコリー、マサラオムレツ、モモ、フライドポテト、パパド、焼きそばまたはカレー+ナン(メニューからお好みのカレーとナンを選択)、デザート<br>[飲み放題内容] ※閉店30分前ラストオーダー。ハイボール、サントリーハイボール、ジムビームハイボール、角ハイボール、ザ・プレミアムモルツ、こだわり酒場のレモンサワー、トマトサワー、グレープフルーツサワー、ミドリジンソーダ、ワイン(赤/白)、焼酎(ロック/水割り/お湯割り)、梅酒(ロック/水割り/ソーダ割り)、ジントニック、カシスソーダ、カシスウーロン、カシスオレンジ、サントリーオールフリー、ホットチャイ、アイスチャイ、アイスコーヒー、ホットコーヒー、コーラ、ジンジャーエール、ウーロン茶、オレンジジュース、ラッシー。<br>★2名様以上でのご注文承ります。★サービス券・割引券はご利用いただけません。',
                    price: '1人¥4000',
                    image: 'Dishesh/special_3.jpg'
                },
                {
                    name: 'ヒマラヤンスープカレーセット',
                    description: '[ネパール定番スープカレーセット] チキンと野菜のスープカレー、バスマティライスまたは日本米、サラダ',
                    price: '¥1100',
                    image: 'Dishesh/special/set_61.jpg'
                },
                {
                    name: 'ナンカレーセット',
                    description: 'お好みのカレー1種類[チキンカレー、キーマエッグカレー、野菜カレー、豆カレー]とナンまたはご飯',
                    price: '¥990',
                    image: 'Dishesh/special/set_62.jpg'
                },
                {
                    name: 'スターセット',
                    description: 'サラダ、チキンティッカ、チキンとほうれん草ソーセージ、野菜カレー、タンドリーチキンカレー、ナンまたはご飯',
                    price: '¥1600',
                    image: 'Dishesh/special/set_63.jpg'
                },
                {
                    name: 'マハラジャセット',
                    description: 'サラダ、タンドリーチキン、カレー(単品カレーメニューから1品選択)、ナン(単品ナンメニューから1品選択)、ドリンク(生ビールまたはソフトドリンクメニューから1品選択)',
                    price: '¥1991',
                    image: 'Dishesh/special/set_64.jpg'
                },
                {
                    name: 'ナマステセット',
                    description: 'サラダ、サモサ、チキンティッカ、チキンとほうれん草ソーセージ、カレー(単品カレーメニューから1品選択)、ナン(単品ナンメニューから1品選択)、ドリンク(生ビールまたはソフトドリンクメニューから1品選択)',
                    price: '¥2400',
                    image: 'Dishesh/special/set_65.jpg'
                },
                {
                    name: 'クラシックセット(2人前)',
                    description: '[2名様合計] ¥4400<br>サラダ、タンドリーチキン(2個)、デザートまたはアイスクリーム、カレー(単品カレーメニューから2品選択)、ナン(単品ナンメニューから2品選択)、ドリンク(生ビールまたはソフトドリンクメニューから2品選択)',
                    price: '¥4400',
                    image: 'Dishesh/special/set_66.jpg'
                }
            ],

            dessert: [
                {
                    name: '本日のインドデザート',
                    description: '',
                    price: '¥380',
                    image: 'Dishesh/dessert_1.jpg'
                },
                {
                    name: 'アイスクリーム',
                    description: '',
                    price: '¥380',
                    image: 'Dishesh/dessert_2.jpg'
                }
            ],

            'ala-carte': [
                {
                    name: 'トマトスープ',
                    description: '',
                    price: '¥500',
                    image: 'Dishesh/carte/menu_01.jpg'
                },
                {
                    name: 'サモサ(2個)',
                    description: '様々な野菜とカシューナッツを包んで揚げた典型的なインド料理',
                    price: '¥550',
                    image: 'Dishesh/carte/menu_02.jpg'
                },
                {
                    name: 'オニオン天ぷら',
                    description: '',
                    price: '¥580',
                    image: 'Dishesh/carte/menu_03.jpg'
                },
                {
                    name: 'アルコアチャール',
                    description: '',
                    price: '¥580',
                    image: 'Dishesh/carte/menu_04.jpg'
                },
                {
                    name: 'パパド(豆クラッカー)',
                    description: '',
                    price: '¥350',
                    image: 'Dishesh/carte/menu_05.jpg'
                },
                {
                    name: 'モモ(6個)',
                    description: 'ネパール風蒸し小籠包',
                    price: '¥680',
                    image: 'Dishesh/carte/menu_06.jpg'
                },
                {
                    name: 'グリーンサラダ',
                    description: '',
                    price: '¥600',
                    image: 'Dishesh/carte/menu_07.jpg'
                },
                {
                    name: 'タンドリーチキン',
                    description: 'ヨーグルトとインドスパイスに漬け込んだ骨付きチキンを土鍋で焼き上げた料理',
                    price: '¥580',
                    image: 'Dishesh/carte/menu_09.jpg'
                },
                {
                    name: 'チキンティッカ(2個)',
                    description: '',
                    price: '¥550',
                    image: 'Dishesh/carte/menu_10.jpg'
                },
                {
                    name: 'キッズセット(8歳以下対象)',
                    description: '① ご飯<br>② ナン<br>③ お好みのカレー1種類(キーマエッグカレーまたはチキンカレー)<br>④ マンゴーラッシー',
                    price: '¥500',
                    image: 'Dishesh/carte/kids_00.jpg'
                }
            ],

            curry: [
                {
                    name: 'キーマエッグカレー',
                    description: 'ひき肉とゆで卵のカレー',
                    price: '¥870',
                    image: 'Dishesh/curry/menu_35.jpg'
                },
                {
                    name: 'キーママサラカレー',
                    description: '半ドライのひき肉カレー',
                    price: '¥960',
                    image: 'Dishesh/curry/menu_36.jpg'
                },
                {
                    name: 'チキンカレー',
                    description: 'じっくり煮込んだチキンとスパイスで作る人気のカレー',
                    price: '¥880',
                    image: 'Dishesh/curry/menu_37.jpg'
                },
                {
                    name: 'チキンとナスのカレー(半ドライ)',
                    description: 'ナス、トマト、玉ねぎ、ピーマン、チキンの半ドライカレー',
                    price: '¥950',
                    image: 'Dishesh/curry/menu_38.jpg'
                },
                {
                    name: 'バターチキンカレー',
                    description: '各種スパイス、クリーム、バター、チキンのカレー',
                    price: '¥980',
                    image: 'Dishesh/curry/menu_39.jpg'
                },
                {
                    name: 'チキンとほうれん草カレー',
                    description: 'ほうれん草とスパイス、チキンで作る濃厚なカレー',
                    price: '¥980',
                    image: 'Dishesh/curry/menu_40.jpg'
                },
                {
                    name: 'チキンとカシューナッツカレー',
                    description: '',
                    price: '¥980',
                    image: 'Dishesh/curry/menu_41.jpg'
                },
                {
                    name: 'カダイチキン',
                    description: 'スパイシーなチキンカレー',
                    price: '¥970',
                    image: 'Dishesh/curry/menu_42.jpg'
                },
                {
                    name: 'スパイシーチキンカレー',
                    description: 'タンドリーチキンのオニオンバタークリームソースカレー',
                    price: '¥970',
                    image: 'Dishesh/curry/menu_43.jpg'
                },
                {
                    name: 'マトンカレー',
                    description: '羊肉を使ったカレー',
                    price: '¥980',
                    image: 'Dishesh/curry/menu_44.jpg'
                },
                {
                    name: 'マトンとほうれん草カレー',
                    description: 'ほうれん草ベースのマトンカレー',
                    price: '¥990',
                    image: 'Dishesh/curry/menu_45.jpg'
                },
                {
                    name: 'マトンとカシューナッツカレー',
                    description: '',
                    price: '¥990',
                    image: 'Dishesh/curry/menu_46.jpg'
                },
                {
                    name: 'ひよこ豆とほうれん草カレー',
                    description: '',
                    price: '¥900',
                    image: 'Dishesh/curry/menu_47.jpg'
                },
                {
                    name: 'シーフードとナスカレー',
                    description: '',
                    price: '¥960',
                    image: 'Dishesh/curry/menu_48.jpg'
                },
                {
                    name: 'シーフードマサラカレー',
                    description: 'シーフード、トマト、フレッシュクリームを使ったクリーミーなカレー',
                    price: '¥990',
                    image: 'Dishesh/curry/menu_49.jpg'
                },
                {
                    name: 'エビカレー',
                    description: 'スパイスで味付けしたエビカレー',
                    price: '¥920',
                    image: 'Dishesh/curry/menu_50.jpg'
                },
                {
                    name: 'ミックス野菜カレー',
                    description: '様々な野菜を使ったマイルドなカレー',
                    price: '¥850',
                    image: 'Dishesh/curry/menu_51.jpg'
                },
                {
                    name: '豆とトマトのバター風味カレー',
                    description: '',
                    price: '¥850',
                    image: 'Dishesh/curry/menu_52.jpg'
                },
                {
                    name: 'ひよこ豆カレー',
                    description: '40種類以上のスパイスで作るひよこ豆カレー',
                    price: '¥930',
                    image: 'Dishesh/curry/menu_53.jpg'
                },
                {
                    name: 'オクラカレー',
                    description: '40種類以上のスパイスで作るオクラカレー',
                    price: '¥930',
                    image: 'Dishesh/curry/menu_55.jpg'
                },
                {
                    name: '焼きナスカレー',
                    description: 'トマトベースの刻んだ焼きナスのカレー',
                    price: '¥930',
                    image: 'Dishesh/curry/menu_56.jpg'
                },
                {
                    name: 'ポテトとナスカレー',
                    description: 'ポテトとナスの半ドライカレー',
                    price: '¥930',
                    image: 'Dishesh/curry/menu_57.jpg'
                },
                {
                    name: '手作りチーズとほうれん草カレー',
                    description: '手作りチーズとほうれん草をスパイスで味付けしたグリーンカレー',
                    price: '¥960',
                    image: 'Dishesh/curry/menu_58.jpg'
                },
                {
                    name: '手作りチーズとバターカレー',
                    description: '40種類以上のスパイスで作るチーズカレー',
                    price: '¥980',
                    image: 'Dishesh/curry/menu_59.jpg'
                }
            ]
        };

        // Drinks data
        const drinks = [
            // Beer
            { name: "キングフィッシャー(インド)", price: "¥580", category: "beer", description: "さわやかな味わいのインドで最も人気のあるビール" },
            { name: "エベレストビール(ネパール)小瓶", price: "¥580", category: "beer", description: "ヒマラヤ産プレミアムラガービール" },
            { name: "ゴルカビール(ネパール)小瓶", price: "¥580", category: "beer", description: "スムースで爽やかなネパールビール" },
            { name: "ネパールアイスビール(ネパール)小瓶", price: "¥580", category: "beer", description: "コールドフィルターでさらにスムースに" },
            { name: "キリン一番搾り生ビール(日本)中ジョッキ", price: "¥480", category: "beer", description: "日本産プレミアムビール" },
            { name: "キリンクラシックラガー(日本)中瓶", price: "¥500", category: "beer", description: "クラシックな日本産ラガービール" },
            { name: "キリンスーパードライ(日本)中瓶", price: "¥500", category: "beer", description: "日本の代表的なドライビール" },
            { name: "キリンフリー[ノンアルコール](日本)小瓶", price: "¥450", category: "beer", description: "ノンアルコールビール" },

            // Whiskey
            { name: "ジョニーウォーカーブラック(水/ロック)シングル", price: "¥450", category: "whiskey", description: "プレミアムブレンデッドスコッチウイスキー" },
            { name: "ウイスキーハイボールシングル", price: "¥450", category: "whiskey", description: "クラシックなウイスキーとソーダ" },

            // Cocktail
            { name: "マンゴーヤンミルク", price: "¥550", category: "cocktail", description: "マンゴーとミルク、スパイスの風味" },
            { name: "マンゴーヤンヨーグルト", price: "¥550", category: "cocktail", description: "マンゴーとクリーミーなヨーグルトのブレンド" },
            { name: "マンゴーオレンジ", price: "¥550", category: "cocktail", description: "マンゴーとオレンジのフュージョン" },
            { name: "ジントニック", price: "¥550", category: "cocktail", description: "クラシックなジンとトニックウォーター" },
            { name: "カシスソーダ", price: "¥550", category: "cocktail", description: "ブラックカラントリキュールとソーダ" },
            { name: "カンパリソーダ", price: "¥550", category: "cocktail", description: "イタリアのビターアペリティフとソーダ" },
            { name: "カンパリヨーグルト", price: "¥550", category: "cocktail", description: "カンパリとヨーグルトのユニークなブレンド" },

            // Wine
            { name: "ソーヴィニヨンブラン(インド)750ml", price: "¥1,900", category: "wine", description: "さわやかなインド産白ワイン" },
            { name: "カベルネシラーズ(インド)750ml", price: "¥1,300", category: "wine", description: "力強いインド産赤ワインブレンド" },
            { name: "コンチャイトロフロステラ(赤)750ml", price: "¥1,800", category: "wine", description: "チリ産赤ワイン" },
            { name: "サンタグレナカベルネ(赤)750ml", price: "¥2,200", category: "wine", description: "プレミアムカベルネソーヴィニヨン" },
            { name: "リストルカベルネ(赤)750ml", price: "¥2,200", category: "wine", description: "フランスラングドック産カベルネ" },
            { name: "サンタヘレナカベルネ(赤)375ml", price: "¥1,300", category: "wine", description: "チリ産カベルネハーフボトル" },
            { name: "リスナールシャルドネ(白)750ml", price: "¥2,200", category: "wine", description: "フランス産シャルドネ" },
            { name: "B&Cミュスカデ(白)750ml", price: "¥2,600", category: "wine", description: "プレミアムフランス産白ワイン" },
            { name: "サンタヘレナシャルドネ(白)375ml", price: "¥1,300", category: "wine", description: "チリ産シャルドネハーフボトル" },
            { name: "カリフォルニア(赤・白)デカンター800ml", price: "¥1,300", category: "wine", description: "カリフォルニア産ハウスワイン" },
            { name: "カリフォルニア(赤/白)グラス", price: "¥400", category: "wine", description: "カリフォルニアワインのグラス" },

            // Plum Wine
            { name: "淡麗梅酒(ロックまたはソーダ割り)グラス", price: "¥450", category: "plum", description: "繊細で爽やかな梅酒" },
            { name: "古酒梅酒(ロックまたはソーダ割り)グラス", price: "¥450", category: "plum", description: "胡椒の風味が効いた梅酒" },
            { name: "利関右衛門梅酒(ロックまたはソーダ割り)グラス", price: "¥450", category: "plum", description: "プレミアム熟成梅酒" },

            // Soft Drinks
            { name: "チャイ(アイス/ホット)", price: "¥350", category: "soft", description: "伝統的なインドのスパイスティー" },
            { name: "コーヒー(ホットまたはアイス)", price: "¥350", category: "soft", description: "プレミアムブレンドコーヒー" },
            { name: "コーラ", price: "¥300", category: "soft", description: "爽やかなコーラソフトドリンク" },
            { name: "ジンジャーエール", price: "¥300", category: "soft", description: "スパークリングジンジャードリンク" },
            { name: "ウーロン茶", price: "¥300", category: "soft", description: "伝統的な中国茶" },
            { name: "オレンジジュース", price: "¥350", category: "soft", description: "絞りたてのオレンジジュース" },
            { name: "ラッシー", price: "¥400", category: "soft", description: "伝統的なインドのヨーグルトドリンク" },
            { name: "マンゴーラッシー", price: "¥480", category: "soft", description: "甘いマンゴーヨーグルトスムージー" },
            { name: "マンゴージュース", price: "¥480", category: "soft", description: "ピュアなマンゴーネクター" }
        ];

        function getCategoryName(category) {
            const names = {
                'beer': 'ビール',
                'whiskey': 'ウィスキー',
                'cocktail': 'カクテル',
                'wine': 'ワイン',
                'plum': '梅酒',
                'soft': 'ソフトドリンク'
            };
            return names[category] || category;
        }

        function ensureContainer() {
            let c = document.getElementById('drinksContainer');
            if (!c) {
                const parent = document.getElementById('drinks-items');
                c = document.createElement('div');
                c.id = 'drinksContainer';
                parent.appendChild(c);
            }
            return c;
        }

        let initialized = false;
        function initDrinksUI() {
            if (initialized) return;
            initialized = true;
            const container = ensureContainer();

            // Find filter buttons inside #drinks-items (we converted onclick to data-cat)
            const filterBtns = Array.from(document.querySelectorAll('#drinks-items [data-cat]'));
            filterBtns.forEach(btn => {
                btn.classList.add('filter-btn');
                btn.addEventListener('click', function () {
                    // remove active from all
                    filterBtns.forEach(b => b.classList.remove('active'));
                    this.classList.add('active');
                    const cat = this.getAttribute('data-cat');
                    filterDrinks(cat);
                });
            });

            // Initially set first button as active and display all
            const first = filterBtns.find(b => b.getAttribute('data-cat') === 'all') || filterBtns[0];
            if (first) { first.classList.add('active'); }
            displayDrinks('all');
        }

        function filterDrinks(category) {
            displayDrinks(category);
        }

        function displayDrinks(category) {
            const container = ensureContainer();
            container.innerHTML = '';

            const filteredDrinks = category === 'all' ? drinks : drinks.filter(d => d.category === category);

            if (filteredDrinks.length === 0) {
                container.innerHTML = '<div class="no-results">No drinks found in this category</div>';
                return;
            }

            filteredDrinks.forEach((drink, index) => {
                const card = document.createElement('div');
                card.className = 'drink-card';
                card.innerHTML = `
                    <div class="drink-header">
                        <h3 class="drink-name">${drink.name}</h3>
                        <span class="drink-price">${drink.price}</span>
                    </div>
                    <p class="drink-description">${drink.description}</p>
                    <span class="drink-category">${getCategoryName(drink.category)}</span>
                `;
                container.appendChild(card);

                // Add animation with slight delay for each card
                setTimeout(() => {
                    card.classList.add('visible');
                }, 100 * index);
            });
        }

        function displayMenuItems(category) {
            const container = document.getElementById('menu-items');
            container.innerHTML = '';

            const items = menuData[category];
            if (!items || items.length === 0) {
                container.innerHTML = '<div class="no-results">No items found in this category</div>';
                return;
            }

            items.forEach((item, index) => {
                const menuItem = document.createElement('div');
                menuItem.className = 'menu-item';
                menuItem.innerHTML = `
                    <img src="${item.image}" alt="${item.name}">
                    <div class="menu-item-content">
                        <h3>${item.name}</h3>
                        <p>${item.description}</p>
                        <div class="price">${item.price}</div>
                    </div>
                `;
                container.appendChild(menuItem);
            });
        }

        // Expose the showDrinksCategory function to global scope
        window.showDrinksCategory = function () {
            document.getElementById('drinks-items').style.display = 'block';
            document.getElementById('menu-items').style.display = 'none';
            initDrinksUI();

            // Update menu category buttons
            const buttons = document.querySelectorAll('.menu-categories button');
            buttons.forEach(btn => btn.classList.remove('active'));
            event.target.classList.add('active');
        };

        // Menu category switching function
        function showCategory(category) {
            document.getElementById('drinks-items').style.display = 'none';
            document.getElementById('menu-items').style.display = 'grid';

            // Update menu category buttons
            const buttons = document.querySelectorAll('.menu-categories button');
            buttons.forEach(btn => btn.classList.remove('active'));
            event.target.classList.add('active');

            // Display the menu items for the selected category
            displayMenuItems(category);
        }

        // Page top button functionality
        window.onscroll = function () {
            const pageTopButton = document.getElementById('page-top');
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                pageTopButton.style.display = 'block';
            } else {
                pageTopButton.style.display = 'none';
            }
        };

        document.getElementById('page-top').addEventListener('click', function () {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });


        // Initialize the page with lunch menu shown by default
        // Wait for everything to be fully loaded
            window.addEventListener('load', function () {
                // First hide the drinks section
                document.getElementById('drinks-items').style.display = 'none';

                // Then show the menu items section
                const menuItems = document.getElementById('menu-items');
                menuItems.style.display = 'grid';

                // Finally load the lunch items
                displayMenuItems('lunch');

                // Set the lunch button as active
                const buttons = document.querySelectorAll('.menu-categories button');
                buttons.forEach(btn => {
                    btn.classList.remove('active');
                    if (btn.textContent.trim() === 'Lunch' ||
                        btn.textContent.trim() === 'ランチ') {
                        btn.classList.add('active');
                    }
                });
            });
