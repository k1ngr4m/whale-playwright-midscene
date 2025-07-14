import {test} from "./fixture";

test('登录', async ({ai,aiInput,aiTap,aiWaitFor,page}) =>{
    // Navigate to login page
    await page.goto('https://whale-login.stage.meetwhale.com/login?slug=whaleshop');
    await page.setViewportSize({ width: 1920, height: 1080 });

    await ai('切换语言为简体中文')
    // Login
    await aiInput('17606745824', '输入手机号的输入框');
    await aiInput('ColayKD41', '输入密码的输入框');
    await aiTap('登录表示同意')
    await aiTap('登录按钮');
    await aiWaitFor('等待界面初始化完成')

    await page.context().storageState({ path: './whale/alivia/stage/whale_auth.json' });
})