# AutoGLM Mobile Automation Beginner Tutorial

**Why It Might Be the Embryo of the Next-Generation "AI Operating System"**

> This is the project I've seen in recent years that is **closest to "AI directly taking over phone operation rights"**.

Many people's first reaction when seeing AutoGLM's demo is:

> "Isn't this just an automation script?"

But when you actually run it and watch your phone **driven by a single natural language command** in front of you, automatically opening apps, searching, clicking, and typing, you realize one thing:

**This is no longer script automation, but a true leap from "language → behavior"**.

This tutorial is aimed at **complete beginners with no technical background**. But beyond the tutorial, I'll also intersperse some **product-level insights** to help you understand: **What stage is AutoGLM at, and what might it become in the future?**

---

## I. What Can AutoGLM Actually Do?

In one sentence:

> **You no longer "operate your phone", but "command your phone"**.

You type a sentence on your computer, for example:

> "Open Meituan, search for the highest-rated hotpot restaurant nearby"

What happens next is:

* Phone automatically lights up
* Opens Meituan App
* Enters search page
* Types keywords
* Scrolls the page
* Finds results

The entire process is **not a pre-recorded flow**, but AI "seeing the screen → understanding the interface → deciding the next step".

### What's the Biggest Difference from Traditional Automation?

| Traditional Automation | AutoGLM |
|------------------------|---------|
| Depends on fixed coordinates and fixed processes | Based on interface understanding and language decisions |
| Fails with minor UI changes | Can "understand" changed interfaces |
| For technical personnel | For ordinary users |
| Like a macro | More like an "intern" |

From a product perspective, **this is a very important signal**:

> **AI is moving from "giving advice" to "direct execution"**.

---

## II. Three Realistic Issues You Need to Know Before Starting

Before officially installing, I suggest you have three mental expectations to avoid "giving up when it doesn't run".

### 1. It's Still in "Engineering Form", Not a Consumer Product

* Need to install Python
* Need to configure ADB
* Need to start via command line

**This is the real state of the current stage, not your problem.**

From a product evolution perspective, it's more like:

> Multi-touch Demo before iPhone launch
> Rather than mature products in the App Store era.

### 2. Android is the "Chosen System", Not by Accident

You'll find:
**iPhone is not supported**.

The reason is not insufficient technical capability, but:

* Android allows deeper system control
* ADB is a natural "backdoor-level interface"
* iOS security model doesn't allow this kind of control to be released

In the long run, this also means:

> **Whoever controls the "operation layer" controls the main battlefield of AI Agents**.

### 3. It's Not About Helping You "Be Lazy", But Changing the "Operation Paradigm"

What's truly valuable is not "clicking a few less times on the screen", but:

* Compressing **complex operations into one sentence**
* Transferring **process memory to AI**
* **Freeing attention from UI**

This will be very intuitive after you successfully run it for the first time.

---

## III. Installation and Setup (You Can Follow Along, No Need to Understand)

### What You Need to Prepare

* Windows computer (Win10 or Win11)
* Android phone (iPhone not supported)
* USB cable that can transfer data
* Stable network

This is not a technical threshold, but **the minimum physical conditions for current AI phone operation**.

---

### Step 1: Python and ADB

(They're not "programmer tools", but "AI's operating system interfaces")

**Python (AI's runtime environment)**
- Download: [Python Official Website](https://www.python.org/downloads/) (Python 3.10+ recommended)
- Remember to check "Add Python to PATH" during installation

**ADB (AI's "neural pathway" to control phones)**
- Download: [Android Official ADB Tool](https://developer.android.com/tools/releases/platform-tools)
- Windows configuration tutorial: [ADB Environment Variable Configuration Guide](https://blog.csdn.net/x2584179909/article/details/108319973)
- macOS users: After extraction, execute  
  `export PATH=${PATH}:~/Downloads/platform-tools`

Understanding perspective:

> **Python = Brain**  
> **ADB = Hands and Eyes**

---

### Step 2: Enable USB Debugging

(Essentially "handing control to AI")

**Switch Process:**

1. **Enable Developer Mode:**
   - Settings > About Phone > Build Number
   - Tap continuously about 10 times until "Developer mode enabled" appears

2. **Enable USB Debugging:**
   - Settings > Developer Options > USB Debugging
   - Turn on the switch
   - Some devices may need a restart

This is a natural metaphor:

> **Future AI Agents must have explicit "authorization mechanisms"**.  
> Now you "flip a switch"; in the future it might be system-level "AI execution permission".

---

### Step 3: Install AutoGLM

(Let AI not just "see", but also "write")

**Install AutoGLM:**

- GitHub repository: [Open-AutoGLM](https://github.com/zai-org/Open-AutoGLM)
- Installation commands:

```bash
git clone https://github.com/zai-org/Open-AutoGLM.git
cd Open-AutoGLM
pip install -r requirements.txt
pip install -e .
```

---

### Step 4: Install ADB Keyboard

**Install ADB Keyboard:**

- Download: [ADB Keyboard APK](https://github.com/senzhk/ADBKeyBoard/blob/master/ADBKeyboard.apk)
- After installation, enable in  
  Settings > Input Method (or Keyboard List)

ADB Keyboard enables:

> **"Input rights" transferred from humans to AI**

The first time you use it, you may feel a **clear sense of "loss of control"**,  
which is exactly the prerequisite for AI Agents to truly exist.

---

### Step 5: Apply for Free API Key (Connect to AI Brain)

1. Open browser, visit: [https://modelscope.cn](https://modelscope.cn)
2. After registering/logging in, visit: [https://modelscope.cn/my/myaccesstoken](https://modelscope.cn/my/myaccesstoken)
3. Click [Create New Key], enter name (e.g., AutoGLM), confirm
4. Copy the generated key (usually starts with MS.), **save it securely!**

> 🔒 Example key: `MS.xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`

---

### Step 6: Quick Installation in Claude Code

See official README for details:  
[https://github.com/zai-org/Open-AutoGLM/blob/main/README.md](https://github.com/zai-org/Open-AutoGLM/blob/main/README.md)

---

## IV. First Run: The Real "Aha Moment"

Run the command line, enter:

> "Open WeChat"

Then the phone really moves on its own.

At this moment, you'll understand:

> **UI is no longer designed only for humans, but for AI**.

All apps, all platforms, will eventually face this fact.

---

## V. Common Issues—All Signs of "Product Not Yet Mature"

The various errors you encounter are essentially:

> **The system is not yet friendly enough to AI**.

- Lock screen cannot be unlocked
- Permissions need manual confirmation
- Error messages are too engineering-oriented

This is not AutoGLM's fault, but:

> **Mobile OS is not yet ready for AI Agents**.

---

## VI. AutoGLM Product Stage Assessment

From a product maturity perspective:

- ❌ Not a consumer product
- ❌ Not an enterprise solution
- ✅ **It's an "operation paradigm validator"**

It validates three things:

1. **Natural language → continuous operations is feasible**
2. **Visual understanding + behavioral decisions can form a closed loop**
3. **Users are willing to give "execution rights" to AI**

Once these three points are established, the rest is just engineering implementation.

---

## VII. Three Insights for Product Managers/Entrepreneurs

1. **The future is not "AI features", but "AI taking over processes"**  
   Buttons will become increasingly irrelevant.

2. **Backend configuration automation will inevitably be replaced by language-driven**  
   Not more complex, but more natural.

3. **The core competitive barrier is "operation permissions" and "security trust"**  
   Not model parameters.

---

## Conclusion

If you just want to play with automation,  
AutoGLM is already impressive.

But if you're building products, systems, AI coaches, or Agents,  
this is definitely an important signal:

> **AI is moving from "using tools with you" to "using tools for you"**.

---

## Case Studies

### 1. Send WeChat Messages

![Send WeChat Message](automsg.png)

---

### 2. Handle WeChat Group Payments

![Handle WeChat Group Payment](autopay.png)

---

### 3. Research Products Based on Group Chat Image Messages

A friend mentioned a motorcycle in a WeChat group, so I asked AutoGLM to help me research it, searching on Taobao, JD.com, and Xiaohongshu, and outputting a research report.

![Research Workflow](researchworkflow.png)
![Research Result 1](result1.png)
![Research Result 2](result2.png)

PS: Taobao, JD.com and other platforms don't sell this motorcycle model, only helmets and other accessories can be found, which somewhat affects the automation report effectiveness. If replaced with more common products, the effect would be better.

