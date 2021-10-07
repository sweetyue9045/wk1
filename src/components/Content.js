import Bus from "../assets/im/bus2.png";
import View from "../assets/im/view.jpg";
import Designer from "../assets/im/designer.png";
import Painter from "../assets/im/painter.png";

export default function Content() {
    return (
        <content>
            <div className="ABT">
                <div id="ABT" className="top_title">
                    <div className="top_box top_box_ABT">About Something</div>
                    <div className="top_bottom">
                        <div className="top_tail"></div>
                    </div>
                </div>
                <div id="FOREWORD" className="ABT_content FOREWORD">
                    <div className="content_title">
                        <div className="subtitle">Abt Foreword</div>
                        <div className="title">前言</div>
                    </div>
                    <div className="btm_content">
                        身為台中人，對我們來說，台中的公車就像是台北的捷運一般的存在，大部分的年輕人都是以公車代步，而最大宗的族群就是學生。<br />
                        台中公車十分普及，幾乎所有的觀光地點都有公車可以到達，所以若想來到台中旅遊，絕對不用擔心代步工具，台中擁有的公車輛十分龐大，幾乎10~15分鐘就有一台公車，當然也可以選擇騎ibike遊台中。<br /><br />
                        有別於台灣其他地方用分段點、緩衝區的方式收費，台中市公車是採「里程計費」，上下車皆須刷卡，搭乘越遠，使用者就必須付更多錢，落實比例原則。<br />
                        最重要的事，現在搭乘台中市市區公車，刷卡包括悠遊卡、一卡通，都享有10公里內免費的優惠價，且全票票價上限60元、半票票價上限30元。<br />
                        還不快來台中玩！<br /><br />
                        今天要為大家介紹台中303號公車可以遊玩的景點，在介紹遊玩景點前，先幫大家科普一些小知識，都是網路找的資料，更詳細的可以自己上網搜搜看看喔！
                    </div>
                </div>
                <div id="TAICHUNG" className="ABT_content TAICHUNG">
                    <div className="content_title">
                        <div className="subtitle">Abt Taichung</div>
                        <div className="title">認識台中</div>
                    </div>
                    <div className="btm_content">
                        台中市位在台灣中部，西望面臨台灣海峽，中央為台中盆地，是台中市的人口稠密區。總面積約2,215平方公里，設籍人口279.3萬人，為台灣人口排名第二的城市，也是「台中都會區」的核心都市。<br />
                        2016年GaWC所公布之世界級城市名單中，台中市列為Gamma-等級之城市，在台灣入榜城市之中排名第二位，為台灣重要的國際都市。<br />
                        「台中」意即「台灣之中央」，名稱始於日治時期，是台灣的地名之中最晚出現的名稱。日治時期因日本人刻意打造一座現代化城市，以市區改正政策將早期市區規劃整然有致，整治流經市區的綠川和柳川，植有柳樹，幽靜美麗，彷若京都鴨川，而有「台灣的京都」之稱。
                        <div className="i">
                            <i className="fas fa-tree fa-1x"> 市樹：台灣五葉松　　</i>
                            <i className="fas fa-seedling fa-1x"> 市花：山櫻花　　</i>
                            <i className="fas fa-dove fa-1x"> 市鳥：白耳畫眉</i>
                        </div>
                    </div>
                </div>
                <div id="BRT" className="ABT_content BRT">
                    <div className="content_title">
                        <div className="subtitle">Abt BRT</div>
                        <div className="title">認識BRT</div>
                    </div>
                    <div className="btm_content">
                        台中市快捷巴士系統（簡稱台中BRT），又稱台中快捷巴士，是台灣台中市「已廢止」的公車捷運系統，原車輛與路線已改制成台中市公車300路。<br />
                        是繼嘉義BRT及2010年台北國際花卉博覽會接駁公車園內線之後，台灣第三座公車捷運系統；亦是台灣第一個採站外收費、半高式月台門及使用雙節公車的公車捷運系統，除部分路段為混合車道以及道路平面交叉外，其餘設置專用道，以捷運的概念營運。<br />全線行駛於台灣大道的公車專用道，經過多個學區、商圈、交通轉運站以及政府機關，為台中重要市公車路線之一。<br /><br />
                        ➤台中人還是習慣將台中市公車300路統稱作BRT
                    </div>
                </div>
                <div id="ROUTE" className="ABT_content ROUTE">
                    <div className="content_title">
                        <div className="subtitle">Abt Route</div>
                        <div className="title">303路線</div>
                    </div>
                    <div className="btm_content">
                        台中市公車303路行駛港區藝術中心到新民高中，主要行經清水區鰲峰路、清水區中山路、沙鹿區中山路及台灣大道，由統聯客運營運。本路線於台灣大道行駛公車專用道，為重要市公車路線之一，與台中市公車304路路線大略相同。<br />
                        全程行車里數約28.0公里，全程行車時間約1小時40分鐘。往新民高中共57站，往港區藝術中心共60站。<br />
                        本路線從港區藝術中心起，沿著清水區鎮政路、鰲峰路、清水區中山路、沙鹿區中山路、光大路、光華路、臺灣大道、中區中山路、建國路、雙十路、精武路、三民路、崇德路及健行路至新民高中。
                        <img className="imbus" src={Bus} alt="" />
                    </div>
                </div>
            </div>
            <div id="RECOMMEND" className="RECOMMEND">
                <div className="massage-im">
                    <img src={View} alt="" />
                </div>
                <div className="message">
                    <div className="top_title top_title_REC">
                        <div className="top_title_REC_s">
                            <div className="top_box ">Give A Recommendation</div>
                            <div className="top_bottom">
                                <div className="top_tail"></div>
                            </div>
                        </div>
                        <div className="message_text">
                            你知道更多台中好玩的景點,　或是有什麼一定要推薦的最佳景點嗎？<br />留言告訴我，讓更多人知道台中的隱藏景點吧！
                        </div>
                    </div>
                    <div id="rec_content" className="rec_content">
                        <input type="text" id="username" autocomplete="off" placeholder="您的暱稱 ..." className="text-success" />
                        <input type="text" id="userplace" autocomplete="off" placeholder="推薦地點 ..." className="text-success" />
                        <textarea id="textmessage" autocomplete="off" placeholder="留個言吧 ..."
                            className="text-success"></textarea>
                        <div className="button-group">
                            <button className="btn-success">清除</button>
                            <button disabled="disabled" className="btn-success">送出</button>
                        </div>
                    </div>
                </div>
            </div>
            <div id="OTHERS" className="OTHERS">
                <div className="person">
                    <div className="person_left">
                        <div className="person_top">
                            <span className="person_title">Meang_Yu</span>
                            <span className="person_grade">大學一年級生</span>
                            <br />
                            <span className="person_divide">Designer / Photographer</span>
                        </div>
                        <div className="person_text">
                            這原本是閱讀與寫作課的一份報告，報告內容是要向大家介紹公車路線與其可遊玩景點，現在我將這份報告搖身一變成為一個小網站。
                            <br />
                            希望透過這個小網站，大家能用另一種方法去看完這份報告，也希望大家看完後，會更喜歡台中❤
                        </div>
                    </div>
                    <div className="person_right">
                        <img src={Designer} alt="" />
                    </div>
                </div>
                <div className="person">
                    <div className="person_left">
                        <div className="person_top">
                            <span className="person_title">Yu_Zhang</span>
                            <span className="person_grade">大學一年級生</span>
                            <br />
                            <span className="person_divide">Painter</span>
                        </div>
                        <div className="person_text">
                            這位是本網站的繪者，首頁的主要圖樣跟動圖都是出自她手，是一個十分熱愛繪畫的人。
                            <br />
                            除了原本在報告中就使用的圖以外，還友情提供了其他圖樣，喜歡本網站插圖的朋友們，歡迎追蹤關注她的粉絲專業喔！
                            <br />
                        </div>
                        <a href="https://www.facebook.com/albada00/" target="_blank">
                            <i className="fab fa-facebook-square"></i> Albada 艾爾巴達
                        </a>
                    </div>
                    <div className="person_right">
                        <img src={Painter} alt="" />
                    </div>
                </div>
            </div>
        </content>
    );
}