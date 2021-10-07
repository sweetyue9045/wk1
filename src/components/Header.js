export default function Header() {
    return (
        <header id="HOME">
            <div className="im">
                <img className="cl cl1" src="im/cloud1.png" />
                <img className="cl cl2" src="im/cloud2.png" />
                <img className="cl cl3" src="im/cloud3.png" />
                <img className="cl cl4" src="im/cloud4.png" />
                <img className="cl cl5" src="im/cloud5.png" />
                <img className="bg" src="im/background.png" />
                <div className="wheel">
                    <img className="tp" src="im/top.png" />
                    <img className="bt" src="im/bottom.png" />
                </div>
                <img className="bg bg2" src="im/background2.png" />
                <img className="van" src="im/van.png" />
            </div>
            <div className="menu">
                <input className="menu-check" type="checkbox" id="menu-check" />
                <label className="menu-open-button" for="menu-check">
                    <img className="menu-img" src="im/map.png" />
                    <div className="menu-text">Taichung <br />BRT | 303 | BUS</div>
                </label>
                <a className="menu-item menu-item1" href="#HOME">
                    <i className=" fas fa-home" id="itemH"></i></a>
                <a className="menu-item menu-item2" href="#ABT">
                    <i className="fas fa-list" id="itemA"></i></a>
                <a className="menu-item menu-item3" href="#INTRO">
                    <i className="fab fa-pagelines" id="itemI"></i></a>
                <a className="menu-item menu-item4" href="#RECOMMEND">
                    <i className="fas fa-envelope" id="itemC"></i></a>
                <a className="menu-item menu-item5" href="#OTHERS">
                    <i className="fas fa-ellipsis-h" id="itemO"></i></a>
            </div>
        </header>
        );
}