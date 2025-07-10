import {test} from "./fixture";

test('authenticate', async ({aiInput,aiTap,aiWaitFor,page}) =>{
    // Navigate to login page
    await page.goto('https://precontentmanage.marketingforce.com/login');
    await page.setViewportSize({ width: 1920, height: 1080 });

    // Login
    await aiInput('12000000001', '输入账号的输入框');
    await aiInput('Qa-12345678', '输入密码的输入框');
    await aiTap('登录按钮');
    await aiWaitFor('等待界面初始化完成')

    await page.context().storageState({ path: 'auth.json' });
})