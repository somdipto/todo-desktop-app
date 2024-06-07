# Todo Desktop App

A simple To-Do List desktop application built with Electron.

## Setup

Follow these steps to set up the Todo Desktop App on Ubuntu and create a desktop shortcut.

### Prerequisites

- Node.js and npm installed on your system.
- Electron installed in your project.
- Python 3 installed on your system.

### Installation

1. **Clone the Repository**:

    ```sh
    git clone https://github.com/yourusername/todo-desktop-app.git
    cd todo-desktop-app
    ```

2. **Install Dependencies**:

    ```sh
    npm install
    ```

3. **Run the App**:

    ```sh
    npm start
    ```

### Creating a Desktop Shortcut

1. **Save the Script**:
    - Create a new file named `create_desktop_entry.py` in the root directory of the project and add the following script:

    ```python
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
    desktop_entry_content = desktop_entry_content.replace("/absolute/path/to/node_modules/.bin/electron", exec_path)
    desktop_entry_content = desktop_entry_content.replace("/absolute/path/to/your/app", app_directory)
    desktop_entry_content = desktop_entry_content.replace("/absolute/path/to/your/icon.png", icon_path)

    # Write the .desktop file content
    with open(desktop_file_path, "w") as desktop_file:
        desktop_file.write(desktop_entry_content)

    # Make the .desktop file executable
    os.chmod(desktop_file_path, 0o755)

    print(f"Desktop entry created at {desktop_file_path}")
    ```

    - Replace the following placeholders with the actual paths:
        - `"/absolute/path/to/node_modules/.bin/electron"`: The absolute path to your Electron executable.
        - `"/absolute/path/to/your/app"`: The absolute path to your Electron app directory.
        - `"/absolute/path/to/your/icon.png"`: The absolute path to your app's icon file.

2. **Open Terminal**:
    - Open a terminal window on your Ubuntu system.

3. **Navigate to Script Directory**:
    - Use the `cd` command to navigate to the directory where you saved the Python script. For example, if you saved the script in the root directory of the project, type:

    ```sh
    cd /path/to/your/project
    ```

4. **Run the Script**:
    - Run the Python script using the `python3` command:

    ```sh
    python3 create_desktop_entry.py
    ```

5. **Ensure Permissions**:
    - Navigate to your Desktop directory and ensure the `.desktop` file is executable by using the `chmod` command:

    ```sh
    cd ~/Desktop
    chmod +x todo.desktop
    ```

6. **Check Desktop**:
    - Look at your desktop. You should see a new file named `todo.desktop`.

7. **Double-Click to Run**:
    - Double-click the `todo.desktop` file on your desktop. This action should launch your Electron app.
    - If your system prompts you to confirm whether you want to run the file, select "Run" or "Execute" to allow it to run as a program.

### Troubleshooting

- Ensure that the paths in the `.desktop` file are absolute paths and correctly point to the Electron executable and your app directory.
- Make sure the `.desktop` file has executable permissions (`chmod +x`).
- Check if there's any typo or formatting issue in the `.desktop` file.

### License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
