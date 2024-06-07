import os

# Define the content of the .desktop file
desktop_entry_content = """[Desktop Entry]
Name=Todo Desktop App
Exec=/absolute/path/to/node_modules/.bin/electron /absolute/path/to/your/app
Terminal=false
Type=Application
Icon=/absolute/path/to/your/icon.png
Categories=Utility;
"""

# Define paths
desktop_file_path = os.path.expanduser("~/Desktop/todo.desktop")
exec_path = "/absolute/path/to/node_modules/.bin/electron"
app_directory = "/absolute/path/to/your/app"
icon_path = "/absolute/path/to/your/icon.png"  # Use a suitable icon path

# Replace placeholders with actual paths
desktop_entry_content = desktop_entry_content.replace("home/sodan/Desktop/test vcod/todo-desktop-app", exec_path)
desktop_entry_content = desktop_entry_content.replace("/absolute/path/to/your/app", app_directory)
desktop_entry_content = desktop_entry_content.replace("/absolute/path/to/your/icon.png", icon_path)

# Write the .desktop file content
with open(desktop_file_path, "w") as desktop_file:
    desktop_file.write(desktop_entry_content)

# Make the .desktop file executable
os.chmod(desktop_file_path, 0o755)

print(f"Desktop entry created at {desktop_file_path}")

