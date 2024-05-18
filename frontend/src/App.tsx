import {ConfigProvider, theme} from "antd";
import {PageLayout} from "./pages/about/PageLayout.tsx";
import {useEffect} from "react";
import './index.css'

const {darkAlgorithm,} = theme;

function App() {
    useEffect(() => {
        let interval = setInterval(() => {
            lines()
        }, 200)

        return () => {
            clearInterval(interval)
        }
    }, [])

    return (
        <ConfigProvider
            theme={{
                components: {
                    Table: {
                        colorBgContainer: "transparent"
                    },
                    Card: {
                        actionsBg: "transparent",
                    }
                },
                token: {
                    colorBgBase: '#141414',
                    colorBorder: '#00a600',
                    colorTextBase: '#00b96b',
                    colorLink: 'rgb(186,186,186)',
                    boxShadow: '0 6px 16px 0 rgba(0,166,0, 0.30), 0 3px 6px -4px rgba(0,166,0, 0.12), 0 9px 28px 8px rgba(0,166,0, 0.05)',
                },
                algorithm: [darkAlgorithm],
            }}
        >
            <PageLayout/>
        </ConfigProvider>
    )
}

export default App

function lines() {
    let sizeW = Math.random() * 6;
    let duration = Math.random() * 15
    let e = document.createElement('div')
    e.setAttribute('class', 'circle')
    let root = document.getElementById("animationBg")!
    root.appendChild(e)
    e.style.width = 2 + sizeW + 'px'
    e.style.left = Math.random() * +innerWidth + 'px'
    e.style.animationDuration = 2 + duration + 's'

    setTimeout(() => {
        root.removeChild(e)
    }, 5000)
}