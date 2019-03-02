<?php

    namespace frontend\controllers;


    class Controller extends \yii\rest\Controller
    {
        protected $url = 'http://urdu.news18.com/rss/eye-catcher.xml';

        /**
         * List of allowed domains.
         * Note: Restriction works only for AJAX (using CORS, is not secure).
         *
         * @return array List of domains, that can access to this API
         */
        public static function allowedDomains() {
            return [
                '*',                        // star allows all domains
                'http://localhost:8080',
                'http://test2.example.com',
            ];
        }

        /**
         * @inheritdoc
         */
        public function behaviors() {
            return array_merge(parent::behaviors(), [

                // For cross-domain AJAX request
                'corsFilter'  => [
                    'class' => \yii\filters\Cors::className(),
                    'cors'  => [
                        // restrict access to domains:
                        'Origin'                           => static::allowedDomains(),
                        'Access-Control-Request-Method'    => ['POST', 'GET', 'OPTIONS'],
                        'Access-Control-Allow-Credentials' => false,
                        'Access-Control-Max-Age'           => 3600,                 // Cache (seconds)
                    ],
                ],

            ]);
        }

    }
