import os
import subprocess
import sys
import time

SCRIPTS_DIR = "scripts"
SELF = os.path.basename(__file__)

print("[INFO] 开始运行博客数据分析脚本...")
print("=" * 50)

start_time = time.time()
script_count = 0

for filename in sorted(os.listdir(SCRIPTS_DIR)):
    if filename.endswith(".py") and filename != SELF:
        path = os.path.join(SCRIPTS_DIR, filename)
        print(f"[RUN] 运行 {filename} ...")
        
        try:
            result = subprocess.run([sys.executable, path], 
                                  check=True, 
                                  capture_output=True, 
                                  text=True)
            if result.stdout:
                print(result.stdout.strip())
            script_count += 1
        except subprocess.CalledProcessError as e:
            print(f"[ERROR] 脚本 {filename} 执行失败:")
            print(e.stderr)
            continue
        
        print()

end_time = time.time()
duration = end_time - start_time

print("=" * 50)
print(f"[OK] 所有脚本执行完成！")
print(f"[INFO] 共执行 {script_count} 个脚本")
print(f"[INFO] 总耗时: {duration:.2f} 秒")
print()
print("[TIP] 提示: 您可以将此脚本集成到 CI/CD 流程中，实现自动化数据分析")
