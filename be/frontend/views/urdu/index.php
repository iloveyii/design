<?php

/* @var $this yii\web\View */

$this->title = 'My Yii Application';
?>
<div class="site-index">

    <div class="jumbotron">
        <h1>Congratulations!</h1>

        <p class="lead">You have successfully created your Yii-powered application.</p>

        <p><a class="btn btn-lg btn-success" href="http://www.yiiframework.com">Get started with Yii</a></p>
    </div>

    <div class="body-content">

        <div class="row">
            <div class="col-lg-12">
                <h2>Heading</h2>

                <ul>
                    <?php foreach($actions as $action): ?>
                    <li>
                        <a href="/urdu/<?=$action?>"><?=ucfirst($action)?></a>
                    </li>
                    <?php endforeach;?>
                </ul>
            </div>
        </div>

    </div>
</div>
