<?php

namespace frontend\controllers;

use Yii;

class UrduController extends Controller
{
    protected $urlNews = 'https://www.urdupoint.com/rss/urdupoint.rss';
    protected $urlInteresting = 'http://urdu.news18.com/rss/eye-catcher.xml';
    protected $urlInternational = 'https://www.urdupoint.com/rss/urdupoint-int.rss';
    protected $urlScience = 'https://www.bbc.com/urdu/science/index.xml#sa-link_location=story-body&intlink_from_url=https%3A%2F%2Fwww.bbc.com%2Furdu%2Finstitutional%2F2009%2F03%2F090306_rss_feed&intlink_ts=1551557584381-sa';

    public function actionIndex()
    {
        Yii::$app->response->format = \yii\web\Response::FORMAT_HTML;
        $methods = get_class_methods($this);
        $actions = [];

        foreach ($methods as $method) {
            if(strpos($method, 'action') !== false) {
                $a = strtolower( str_replace('action', '', $method) );
                if(strlen($a) > 2) {
                    $actions[] = $a;
                }
            }
        }

        return $this->render('index', [
            'actions' => $actions]
        );
    }

    public function actionNews()
    {
        $xml = file_get_contents($this->urlNews) or die('Feed not loading');

        $xml = simplexml_load_string(iconv('CP1256', 'UTF-8', $xml));

        $items = ($xml->xpath('//item'));

        $result = [];
        foreach ($items as $item) {
            $image = (string)$item->description;
            preg_match('/src=(.*\.jpg\._\d+|.*\.png\._\d+|.*\.jpeg\._\d+)/', $image, $matches);
            if (count($matches) < 2) {
               continue;
            }
            $title = iconv("UTF-8", "CP1256", (string)$item->title);
            $result[] = [
                'title' => $title,
                'link' => $title,
                'image' => trim(trim($matches[1], "'"), '"'),
                'content' => $title,
                'contentSnippet' => $title,
            ];
        }

        return ($result);
    }

    public function actionInternational()
    {
        $xml = file_get_contents($this->urlInternational) or die('Feed not loading');

        $xml = simplexml_load_string(iconv('CP1256', 'UTF-8', $xml));

        $items = ($xml->xpath('//item'));

        $result = [];
        foreach ($items as $item) {
            $image = (string)$item->description;
            preg_match('/src=(.*\.jpg\._\d+|.*\.png\._\d+|.*\.jpeg\._\d+)/', $image, $matches);
            if (count($matches) < 2) {
                continue;
            }
            $title = iconv("UTF-8", "CP1256", (string)$item->title);
            $result[] = [
                'title' => $title,
                'link' => $title,
                'image' => trim(trim($matches[1], "'"), '"'),
                'content' => $title,
                'contentSnippet' => $title,
            ];
        }

        return ($result);
    }

    public function actionInteresting()
    {
        $xml = file_get_contents($this->urlInteresting) or die('Feed now loading');

        $feeds = str_replace("g:image_link", "image", $xml);
        $xml = simplexml_load_string($feeds);

        $items = ($xml->channel->xpath('//item'));

        $result = [];
        foreach ($items as $item) {
            $image = (string)$item->image;
            preg_match('/src=(.*\.jpg|.*\.png|.*\.jpeg)/', $image, $matches);
            if (count($matches) < 2) {
                continue;
            }
            $result[] = [
                'title' => (string)$item->title,
                'link' => (string)$item->link,
                'image' => trim($matches[1], "'"),
                'content' => (string)$item->description,
                'contentSnippet' => (string)$item->description,
            ];
        }

        return $result;
    }

    public function actionScience()
    {
        $xml = file_get_contents($this->urlScience) or die('Feed now loading');

        $feeds = str_replace("g:image_link", "image", $xml);
        $xml = simplexml_load_string($xml);
        $items = ($xml->entry);
        $result = [];

        foreach ($items as $item) {
           $result[] = [
                'title' => (string)$item->title,
                'link' => null,
                'image' => 'http://placehold.it/100x100',
                'content' => (string)$item->title,
                'contentSnippet' => (string)$item->summary,
            ];
        }

        return $result;
    }

    public function actionMazahia()
    {
        $items = [
            [
            'title' => 'پڑتال',
            'image' => 'http://placehold.it/100x100',
            'summary' => 'پرنام سنگھ لدھیانہ یونیورسٹی کا امتحان دے رہا تھا۔ امتحانی پرچہ کچھ یوں بنا ہوا تھا کہ سوال جواب صحیح یا غلط لکھ کر دینا تھا۔ پرچہ خاصا طویل تھا۔ پرنام سنگھ بہت انہماک سے پرچہ حل کرنے میں جٹا ہوا تھا۔ نگران ٹہلتا ہوا پرنام سنگھ کے پاس پہنچا تو اس نے دیکھا کہ پرنام سنگھ نے ایک روپے کا سکہ ہاتھ میں پکڑا ہوا ہے۔ ہر سوال پر وہ اسے اُچھا لتاہے، سکے کا رخ دیکھتاہے اور سوال کا جواب غلط یا صحیح لکھ دیتاہے۔
نگران بہت حیران ہوا، اس نے پوچھا، ”کا کا جی… ایہہ کیہہ کر رہے او؟“ پرنام سنگھ کہنے لگا”سرجی!پرچہ حل کر رہیا واں!“ نگران کہنے لگا،”پرتسی بار بار روپیہ سٹ کے”ٹاس“ کیوں کر رہے او؟“ پرنام سنگھ بولا،”سرجی! ایہہ سائنس اے! ڈیڑھ سو سوال نیں، میں ہر سوال تے ٹاس کرنا واں، سیدھا پاسا آوے تے جواب ٹھیک، پُٹھا پاسہ آوے تے جواب غلط، سائنس ایہہ کہندی اے کہ ایس طراں میرے ادھے جواب ضرور ٹھیک ہون گے!“ نگران پرنام سنگھ کے”سائنس“ کے علم سے بہت متاثر ہوا اور واپس چلا گیا۔
پرچے کا وقت ختم ہونے والاتھا تو وہ پھر پر نام سنگھ کے پاس آیا، دیکھا کہ پرنام سنگھ بار بار سکہ اچھال رہا ہے،ساتھ میں گالیاں بھی دے رہا ہے! اس نے پوچھا! ”کا کاجی… کیہہ گل اے ، بڑے غصے وچ او؟“ پڑتال کرن واسطے ٹاس کرناواں تے بھونتی دا جواب کجھ ہور آؤنداوے۔“'
            ],
            [
                'title' => 'کاروبار',
                'image' => 'http://placehold.it/100x100',
                'summary' => 'پرنام سنگھ، گورنام سنگھ اور ان کے دو دوستوں نے گاؤں میں اپنی زمین بیچی اور شہر میں ہوٹل بنانے کا فیصلہ کیا۔ انہوں نے شہر میں بہترین جگہ پر عالی شان ہوٹل بنایا مگر ایک مہینے تک ان کے ہوٹل میں ایک گاہک بھی نہ گھسا، کیوں؟ اس لئے کہ چاروں نے”پنڈ“ سے لا کر اپنے چار بوہلی کتے بھی ہوٹل کے دروازے پر باندھ دئیے تھے! پھر چاروں نے ہوٹل بیچ کر گاڑیاں مرمت کرنے کا گیراج بنانے کا فیصلہ کیا۔
ورکشاپ بنائی، ہر قسم کی مشینری لگائی، مگر ایک مہینے تک کوئی گاہک ان کے گیراج میں گاڑی مرمت کرانے نہ آیا! کیوں؟ اس لئے کہ انہوں نے گیراج دوسری منزل پر بنایا تھا! گیراج بیچ کر چاروں دوستوں نے ٹیکسی خریدی… ایک ماہ تک سڑکوں پر مارے مارے پھرتے رہے مگر کوئی آدمی ان کی ٹیکسی میں نہ بیٹھا۔ کیوں؟ اس لئے کہ چاروں سر دار ہر وقت اپنی ٹیکسی میں ہی سوار رہتے تھے! تنگ آکر سرداروں نے ٹیکسی سمندر میں پھینکنے کا فیصلہ کیا، سارا دن وہ ٹیکسی سمندر میں دھکیلنے کے لئے زور لگاتے رہے مگر ٹیکسی اپنی جگہ سے نہ ہلی! کیوں؟ اس لئے کہ دو آگے سے اور دو پیچھے ٹیکسی کو دھکا لگا رہے تھے!'
            ],
            [
                'title' => 'فینسی شو',
                'image' => 'http://placehold.it/100x100',
                'summary' => 'ایک تہوار پر فینسی ڈریس شو کے لئے ایک صاحب نے کتے کا بہروپ بھر رکھا تھا اور وہ بالکل کتا دکھائی دے رہا تھا۔ جب وہ ڈریس شو میں شرکت کے لئے جا رہے تھے تو راستے میں آوارہ کتے پکڑنے والے شخص نے انہیں دبوچ لیا اور گھسیٹ کر بلدیہ کے ٹرک کی طرف لے جانے لگا۔
وہ شخص چلانے لگاکہ میں نے فینسی ڈریس شو کے لئے یہ بہروپ دھار رکھا ہے۔ ”بکواس بند کرو۔“کتے پکڑنے والے نے کہا۔”میں نے صبح سے اب تک بارہ کتے پکڑے ہیں، ہر کتے نے اسی قسم کی بات کی ہے۔“'
            ],
            [
                'title' => 'دودھ والا',
                'image' => 'http://placehold.it/100x100',
                'summary' => 'ایک صاحب نے ایک طوطا پال رکھا تھا۔ ایک دن وہ صاحب گھر پر نہ تھے کہ دودھ والا آگیا اس نے دروازہ کھٹکھٹایا اند رسے پھر آواز آئی”کون؟“ باہر سے اس نے پھر جواب دیا ”دودھ والا“ اور انتظار کرنے لگا کہ ابھی کوئی دروازہ کھول دے گا۔
آخر ا س نے تنگ آکر کہاں بھائی صاحب میں تو باہر دودھ والا ہوں اندر آپ کون ہیں؟ اندر سے فوراً آوازآئی”دودھ والا۔“'
            ]
        ];

        foreach ($items as $item) {
            $item = (Object) $item;
            $result[] = [
                'title' => (string)$item->title,
                'link' => null,
                'image' => (string)$item->image,
                'content' => (string)$item->title,
                'contentSnippet' => (string)$item->summary,
            ];
        }

        return $result;
    }
}
