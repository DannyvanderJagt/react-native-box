#!/bin/bash
read -r -d '' script <<'EOF'
on run argv
tell application "iTerm"
    activate
    set myterm to (make new terminal)
    tell myterm
        launch session "Default"
        tell the last session
            repeat with arg in argv
               say arg
               write text arg
            end repeat
        end tell
    end tell
end tell
end run
EOF
echo "$script" | osascript ``-'' $@