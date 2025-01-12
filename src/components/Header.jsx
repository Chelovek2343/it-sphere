import React from 'react';

const Header = () => {
    return (
        <>
            <header className="header">
                <div className="container">
                    <nav className="header__nav">
                        <div className="wrapper">
                            <div className="nav__item active">
                                <a href="#">Главная</a>
                            </div>
                            <div className="nav__item">
                                <a href="#">Наши проекты</a>
                            </div>
                            <div className="nav__item">
                                <a href="#">Услуги</a>
                            </div>
                            <div className="nav__item">
                                <a href="#">Новости</a>
                            </div>
                            <div className="nav__item">
                                <a href="#">Контакты</a>
                            </div>
                        </div>
                        <hr />
                    </nav>

                    <div className="header__suptitle">
                        <p>Передовая IT студия</p>
                    </div>
                    <div className="header__title">
                        <p>Мы создаем легкие решения сложных задач и проблем</p>
                    </div>
                    <div className="header__link">
                        <a href='#'>Наши проекты</a>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
