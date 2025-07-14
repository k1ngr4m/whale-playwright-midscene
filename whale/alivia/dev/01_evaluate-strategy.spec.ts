import {test} from "./fixture";
test.use({ storageState: './whale/alivia/dev/whale_auth.json' });

test('新建评估规则', async ({ aiInput, aiTap, aiAssert, aiWaitFor, page}) => {
    await page.goto('https://whale-alivia.develop.meetwhale.com/evaluate-strategy/manage/harbor-evaluate');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await aiWaitFor('等待界面初始化完成')

    // await aiTap('列表页上方的“管理内容评估”按钮');
    await aiTap('右侧的“新建规则”按钮');

    await aiInput('文字-标题-算法打分', '输入规则名称的输入框')
    await aiTap('“内容中心文件检测”选项')
    await aiTap('请选择生效内容')
    await aiTap('下拉框中的“图片”选项')
    await aiTap('下拉框中的“视频”选项')
    await aiTap('下拉框中的“WORD”选项')

    await aiTap('“内容合规工具”选项')
    await aiTap('右下角蓝色的"确定"按钮')

    await aiTap('标题一栏中的“算法打分”勾选框')
    await aiTap('确定')
});