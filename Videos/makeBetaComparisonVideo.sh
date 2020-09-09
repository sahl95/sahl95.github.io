rm betaComparison.mp4 

ffmpeg -i b5500.mp4 -vf tpad=stop_mode=clone:stop_duration=5 b5500_stop.mp4
ffmpeg -i b5500_stop.mp4 -vf drawtext="fontfile=/path/to/font.ttf:text='(b)': fontcolor=white: fontsize=24: box=1: boxcolor=black: x=10: y=15" -codec:a copy b5500_label.mp4

ffmpeg -i b15.mp4 -vf tpad=stop_mode=clone:stop_duration=5 b15_stop.mp4
ffmpeg -i b15_stop.mp4 -vf drawtext="fontfile=/path/to/font.ttf:text='(a)': fontcolor=white: fontsize=24: box=1: boxcolor=black: x=10: y=15" -codec:a copy b15_label.mp4

ffmpeg -i b15_label.mp4 -i b5500_label.mp4 -filter_complex "[0]pad=iw+50:color=#0B0D19[left];[left][1]hstack=inputs=2" betaComparison.mp4

rm *_label.mp4 *_stop.mp4
