import React from "react";
import {
    Badge,
    Button,
    Card,
    Col,
    Divider,
    Flex,
    Image,
    Layout,
    Row,
    Table,
    Tag,
    theme,
    Timeline,
    Typography
} from "antd";
import {SyncOutlined} from '@ant-design/icons';
import {ReactTyped} from "react-typed";

const { Content} = Layout;

const {useToken} = theme;

const contentStyle: React.CSSProperties = {
    minHeight: '100vh',
    zIndex: 2,
    // lineHeight: '120px',
    padding: '12px 48px',
    overflow: 'initial'
};


const skillsColumns = [
    {
        title: 'Тип',
        dataIndex: 'type',
        key: 'type',
        render: (_: typeof skillsData[number]["type"], row: typeof skillsData[number]) => (
            <Tag color={row.color}>
                {row.tag}
            </Tag>
        ),
    },
    {
        title: 'Навык',
        dataIndex: 'skill',
        key: 'skill',
    },
];

const achievementsColumns = [
    {
        title: 'Тип',
        dataIndex: 'tag',
        key: 'tag',
        render: (_: typeof achievementsData[number]["tag"], row: typeof achievementsData[number]) => (
            <Tag color={row.color}>
                {row.tag}
            </Tag>
        ),
    },
    {
        title: 'Достижение',
        dataIndex: 'achievementContent',
        key: 'achievement',
    },
];

const skillsData = [
    {
        key: 'linux',
        skill: 'Linux: bash, zsh, git',
        type: 'hard',
        tag: 'CS-база',
        color: 'red',
    },
    {
        key: 'architecture',
        skill: 'Архитектура, чистота и производительность кода: понимание, когда и где применять структурки, алгосы, паттерны проектирования. +solid+dry+mvc+fsd',
        type: 'hard',
        tag: 'CS-база',
        color: 'red',
    },
    {
        key: 'browsers',
        skill: 'Browsers: концептуальное понимание работы веб-протоколов, что происходит с запросом с момента его отправки и до получения ответа; DevTools',
        type: 'hard',
        tag: 'CS-база',
        color: 'red',
    },
    {
        key: 'api',
        skill: 'API: REST, RPC',
        type: 'hard',
        tag: 'CS-база',
        color: 'red',
    },
    //
    {
        key: 'nestjs',
        skill: 'NestJS',
        type: 'hard',
        tag: 'Бэкенд',
        color: 'green',
    },
    {
        key: 'node-php',
        skill: 'Node.js / PHP',
        type: 'hard',
        tag: 'Бэкенд',
        color: 'green',
    },
    {
        key: 'sql-mysql',
        skill: 'SQL, MySQL',
        type: 'hard',
        tag: 'Бэкенд',
        color: 'green',
    },
    //
    {
        key: 'fe-base',
        skill: 'HTML5, CSS3, SCSS, JavaScript (ES6+), TypeScript',
        type: 'hard',
        tag: 'Фронтенд',
        color: 'yellow',
    },
    {
        key: 'react',
        skill: 'React',
        type: 'hard',
        tag: 'Фронтенд',
        color: 'yellow',
    },
    {
        key: 'react-ecosystem',
        skill: 'React и экосистема: React, Redux, Redux Toolkit, MobX, TanStack Query, tRPC, Formik, React Hook Form, React Router, generouted, styled-components, AntD, mui, cypress, jest, storybook, Next.js, Vite / webpack',
        type: 'hard',
        tag: 'Фронтенд',
        color: 'yellow',
    },
    //
    {
        key: 'nx',
        skill: 'Nx',
        type: 'hard',
        tag: 'Мэйнтэйн тулсет',
        color: 'pink',
    },
    //
    {
        key: 'english',
        skill: 'English (B1)',
        type: 'soft',
        tag: 'Коммуникация',
        color: 'blue',
    },
    {
        key: 'code-explorer',
        skill: 'Умение разбираться в чужом коде',
        type: 'soft',
        tag: 'Продуктивность',
        color: 'blue',
    },
    {
        key: 'team-player',
        skill: 'Работа в команде (scrum / jira / confluence / outline)',
        type: 'soft',
        tag: 'Продуктивность',
        color: 'blue',
    },
];

const achievementsData = [
    {
        key: 'bs-credit-calculator',
        achievementContent: 'Кредитный калькулятор, поддерживающий несколько режимов работы',
        tag: 'OOO BS',
        color: 'green',
    },
    {
        key: 'bs-fs',
        achievementContent: 'Файловое хранилище с деревом категорий файлов',
        tag: 'OOO BS',
        color: 'green',
    },
    {
        key: 'bs-fs-permissions',
        achievementContent: 'Ролевая модель файлового хранилища с использованием tRPC',
        tag: 'OOO BS',
        color: 'green',
    },
    {
        key: 'freelance-credit-calculator',
        achievementContent: 'Расширение для chrome, разгадывающее капчу',
        tag: 'freelance / upwork',
        color: 'green',
    },
    {
        key: 'pet/cli-aae-tool',
        achievementContent: 'CLI-утилита на python, которая прокидывает текстовые данные в предварительно заготовленный дизайнерами проект на Adobe After Effects, и триггерит рендер видео. Работает вкупе с самописным на EcmaScript3 плагином для AAE',
        tag: 'pet project',
        color: 'yellow',
    },
    {
        key: 'pet/steam-customers-target-tool',
        achievementContent: 'Steam утилита, выполняющая автоматический таргет пользователей, заинтересованных в графических работах, автором которых я был',
        tag: 'pet project',
        color: 'yellow',
    },
    {
        key: 'pet/formik-dynamic-form',
        achievementContent: 'Динамическое добавление и удаление полей с разными типами и их взаимосвязанная валидация на основе Formik',
        tag: 'pet project',
        color: 'yellow',
    },
];

export function PageLayout() {
    const {token} = useToken();

    return (
        <Layout style={{minHeight: '100vh', overflow: "hidden"}}>
            <Content style={contentStyle}>
                <Row justify={"center"}>
                    <Col span={12} style={{
                        border: `2px solid ${token.colorBorder}`,
                        borderRadius: token.borderRadius,
                        padding: token.padding,
                        boxShadow: token.boxShadow,
                        backgroundColor: 'rgb(19 26 23 / 95%)'
                    }}>
                        <Row gutter={16} justify={"space-around"}>
                            <Col>
                                <Badge count="Опыт: 3 года 6 месяцев" offset={[-100, 195]}
                                       color={"gray"}
                                       style={{color: token.colorWhite, fontWeight: token.fontWeightStrong}}>
                                    <Card
                                        cover={<Image
                                            width={200}
                                            preview={false}
                                            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                                        />}
                                        style={{background: token.Card?.actionsBg}}
                                        bordered={false}
                                        actions={[<Tag color="blue"><Button type="link" href={"https://t.me/aiilmaxd"} target={"_blank"}>
                                            Telegram
                                        </Button></Tag>]}
                                        styles={{
                                            body: {
                                                padding:0
                                            }
                                        }}
                                    >
                                    </Card>

                                </Badge>
                            </Col>
                            <Col  span={16}>
                                <Typography.Title level={3} underline>
                                    Обо мне
                                </Typography.Title>
                                <Typography.Paragraph>
                                    <ReactTyped
                                        startWhenVisible
                                        strings={[
                                            [
                                                "<strong>Имя:</strong> Виталий <br>",
                                                "<strong>Псевдоним:</strong> supervitalik <br>",
                                                "<strong>Возраст:</strong> 25 <br>",
                                                "<strong>Место пребывания:</strong> Москва / Санкт-Петербург <br>",
                                                "Свободное время забиваю CS, а в частности, разработкой frontend (иногда fullstack) приложений: <em>ниже можно узнать некоторые факты, имеющие отношение к моим компетенциям, как разработчика</em>. ",
                                                "В отвлеченное от посиделок за самоваром время, прокачиваю english, посещаю бассейн и путешествую. Люблю проводить время с семьей, девушкой и домашними животными."

                                            ].join("")
                                        ]}
                                        typeSpeed={1}
                                    />
                                </Typography.Paragraph>
                            </Col>
                        </Row>

                        <Divider style={{backgroundColor: token.colorBorder}}/>

                        <Row justify={"center"}>
                            <Col span={24}>
                                <Flex vertical gap={16}>
                                    <Typography.Title level={3} underline>
                                        Образование и Коммерция
                                    </Typography.Title>
                                    <Timeline
                                        mode="right"
                                        items={[
                                            {
                                                label: <>2020 - <SyncOutlined spin /></>,
                                                color: 'yellow',
                                                // dot: <ClockCircleOutlined/>,
                                                children: 'Middle FrontEnd-разработчик, OOO BS',
                                            },
                                            {
                                                label: '2019 - 2020',
                                                children: 'FrontEnd-разработчик, OOO Agaylo',
                                                color: 'green',
                                            },
                                            {
                                                color: 'green',
                                                label: '2018',
                                                children: 'Фриланс на Upwork',
                                            },
                                            {
                                                color: 'green',
                                                label: '2018',
                                                children: 'Выпуск',
                                            },
                                            {
                                                color: 'red',
                                                label: '2017',
                                                children: 'WorldSkills',
                                            },
                                            {
                                                color: 'green',
                                                label: '2016',
                                                children: 'Коммерческий дизайн под внутриигровую платформу Steam',
                                            },
                                            {
                                                color: 'green',
                                                label: '2014',
                                                children: 'ККМТ ("Программная Инженерия")',
                                            },
                                        ]}
                                    />
                                </Flex>
                            </Col>
                        </Row>

                        <Divider style={{backgroundColor: token.colorBorder}}/>

                        <Row>
                            <Col span={24}>
                                <Flex vertical gap={16}>
                                    <Row justify={"center"} gutter={16}>
                                        <Col span={12}>
                                            <Typography.Title level={3} underline>
                                                Навыки
                                            </Typography.Title>
                                            <Table columns={skillsColumns} dataSource={skillsData} pagination={false}
                                                   size={"small"}/>
                                        </Col>
                                        <Col span={12}>
                                            <Typography.Title level={3} underline>
                                                Достижения
                                            </Typography.Title>
                                            <Table columns={achievementsColumns} dataSource={achievementsData} pagination={false}
                                                   size={"small"}/>
                                            {/*<List*/}
                                            {/*    size="small"*/}
                                            {/*    dataSource={achievementsData}*/}
                                            {/*    renderItem={(item) => <List.Item>{item.content}</List.Item>}*/}
                                            {/*/>*/}
                                        </Col>
                                    </Row>
                                </Flex>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Content>
            <div id={"animationBg"} />
        </Layout>
    );
}