import React from 'react';

const Header = () => {
    return (
        <>
            <header className="header">
                <div className="container">
                    <nav className="header__nav">
                        <div className="wrapper">
                            <div className="header__nav-item header__nav-item--active">
                                <a href="#">Главная</a>
                            </div>
                            <div className="header__nav-item">
                                <a href="#">Наши проекты</a>
                            </div>
                            <div className="header__nav-item">
                                <a href="#">Услуги</a>
                            </div>
                            <div className="header__nav-item">
                                <a href="#">Новости</a>
                            </div>
                            <div className="header__nav-item">
                                <a href="#">Контакты</a>
                            </div>
                        </div>
                    </nav>
                </div>
                <hr />

                <div className="container container--header">
                    <div className="header__info">
                        <div className="header__info-suptitle">
                            <p>
                                Передовая IT студия
                            </p>
                        </div>
                        <div className="header__info-title">
                            <p>
                                Мы создаем легкие решения сложных задач и
                                проблем
                            </p>
                        </div>
                        <div className="header__info-link">
                            <a href="#">Наши проекты</a>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
