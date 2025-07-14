import {test} from "./fixture";

test('authenticate', async ({aiInput,aiTap,aiWaitFor,page}) =>{
    // Navigate to login page
    await page.goto('https://whale-alivia.develop.meetwhale.com/login');
    await page.setViewportSize({ width: 1920, height: 1080 });

    // Login
    await aiInput('17606745824', '输入手机号的输入框');
    await aiInput('123456', '输入验证码的输入框');
    await aiTap('登录按钮');
    await aiWaitFor('等待界面初始化完成')

    await page.context().storageState({ path: './whale/alivia/dev/whale_auth.json' });
})