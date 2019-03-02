<?php

namespace frontend\controllers;


class News18Controller extends Controller
{
    protected $urlInteresting = 'http://urdu.news18.com/rss/eye-catcher.xml';

    public function actionInteresting()
    {
        $xml = file_get_contents($this->$urlInteresting) or die('Feed now loading');

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

}
