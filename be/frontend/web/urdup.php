<?php
    $url = 'https://www.urdupoint.com/rss/urdupoint.rss';
    $xml = file_get_contents($url) or die('Feed not loading');
    $xml = substr($xml, 0, 280);
    // $xml = 'ØªØ§Ø²Û ØªØ±ÛŒÙ† Ø§Ø±Ø¯Ùˆ Ø®Ø¨Ø±ÛŒÚº';

    $tab = array("UTF-8", "ASCII", "Windows-1252", "ISO-8859-15", "ISO-8859-1", "ISO-8859-6", "CP1256");
    $chain = "";
    foreach ($tab as $i)
    {
        foreach ($tab as $j)
        {
            echo " =============== $i -> $j ============== \n ";
            try {
                echo iconv($i, $j, "$xml");
            } catch (Exception $e) {

            }
        }
    }

    echo $chain;
