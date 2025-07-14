import {test} from "./fixture";
test.use({ storageState: './whale/alivia/stage/whale_auth.json' });

test('新建评估规则', async ({ ai, aiInput, aiTap, aiAssert, aiWaitFor, agentForPage, page}) => {
    const agent = await agentForPage(page);
    await agent.setAIActionContext('有 cookie 对话框时先关闭它.')
    await page.goto('https://whale-alivia.stage.meetwhale.com/evaluate-strategy/manage/harbor-evaluate');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await aiWaitFor('等待界面初始化完成', {
        timeoutMs: 3000
    })


    await aiTap('右侧的“新建规则”按钮');

    await aiInput('自动化新建规则', '输入规则名称的输入框')
    await aiTap('“内容中心文件检测”选项')
    await aiTap('请选择生效内容')
    await ai('将下拉框中的“图片、视频、WORD、PDF、PPT、EXCEL、在线文档“全选')

    await aiTap('“社媒分发内容检测”选项')
    await aiTap('请选择生效内容')
    await ai('将下拉框中的“小红书、抖音、快手、视频号、B站、微博“全选')

    await aiTap('“视频剪辑脚本检测”选项')
    await aiTap('“内容合规工具”选项')

    await aiTap('右下角蓝色的"确定"按钮')

    await aiAssert('出现标题、正文、图片、视频、数据等配置项目')
});

test('设置评估内容', async ({ ai, aiInput, aiTap, aiAssert, aiWaitFor, agentForPage, page}) => {
    const agent = await agentForPage(page);
    await agent.setAIActionContext('有 cookie 对话框时先关闭它.')
    await page.goto('https://whale-alivia.stage.meetwhale.com/evaluate-strategy/manage/harbor-evaluate');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await aiWaitFor('等待界面初始化完成', {
        timeoutMs: 3000
    })

    await aiTap('列表页第一条自动化新建规则')

    await ai('勾选“标题”下的评估项，包括“算法打分”、“字数打分”、“查重检测”、“合规检测”')
    await ai('评估项目“查重检测“中有两个input，设置“查重检测”的两个重复率的值')
    await ai('评估项目"合规检测"中有两个input下拉框，点击“严重项：检测到「标题中的文字出现此类合规词」，检测不通过”下方的input下拉框后，选中第一条数据')
    await aiTap('空白处')
    await ai('评估项目"合规检测"中有两个input下拉框，点击“一般项：检测到「标题中的文字出现此类合规词」，提示有风险”下方的input下拉框后，选中第二条数据')
    await aiTap('蓝色的“确认”按钮')
    await aiAssert('中间正上方弹出“修改成功”提示框')
    // await ai('勾选“正文”下的评估项，包括“算法打分”、“字数打分”、“查重检测”、“产品相关性检测”、“话题相关性检测”、“合规检测”')
    // await ai('勾选“图片”下的评估项，包括“图片数量”、“字数打分”、“查重检测”、“产品相关性检测”、“话题相关性检测”、“合规检测”')
}
)
