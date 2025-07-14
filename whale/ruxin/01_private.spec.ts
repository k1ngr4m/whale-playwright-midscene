import {test} from "./fixture";
test.use({ storageState: './whale/ruxin/ruxin_auth.json' });

test('Create a new folder', async ({ aiInput, aiTap, aiAssert, aiWaitFor, page}) => {
    await page.goto('https://precontentmanage.marketingforce.com/harbor/content/Private');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await aiWaitFor('等待界面初始化完成')

    await aiTap('左侧“个人空间”按钮');
    await aiTap('右侧“新建”按钮');
    await aiTap('下拉框中的“文件夹”按钮');
    await aiInput('文件夹名称', '输入文件夹名称的输入框');
    await aiInput('这是一个新文件夹的简介', '输入文件夹简介的输入框')
    await aiTap('确定按钮');

    await aiAssert('弹出创建成功提示框');
});

test('Delete a folder in private content', async ({ aiHover, aiTap, aiAssert, aiWaitFor, page,}) => {
    await page.goto('https://precontentmanage.marketingforce.com/harbor/content/Private');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await aiWaitFor('等待界面初始化完成')

    await aiHover('文件夹名称');
    await aiTap('悬浮时出现的"..."按钮');
    await aiTap('“删除”按钮');
    await aiTap('二次确认弹窗中的“删除”按钮');

    await aiAssert('页面显示“删除成功”提示');
});

