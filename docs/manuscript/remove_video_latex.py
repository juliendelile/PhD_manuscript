#!/usr/bin/env python2
# -*- coding: UTF8 -*-

import re
import sys

# Config:
begin="\\begin{figure}"
beginL=len(begin)
end="\\end{figure}"
endL=len(end)
delileFactor="{video_erase_figure_from_tex}"

# Ouverture du fichier argv[1]==premier paramètre
file = open(sys.argv[1])
content = file.read()       # Lit tout, mais t'as assez de ram, non ;-)
currentPos=0                # Position courante
buffer=""
while(currentPos<len(content)) :
    begPos=content.find(begin,currentPos)
    if begPos >= 0:
        buffer+=content[currentPos:begPos]
        endPos=content.find(end,begPos)
        if content.find(delileFactor,begPos,endPos) == -1:
            endPos += endL      # Inclure la borne de fin
            buffer+=content[begPos:endPos]
            currentPos=endPos
        else:
            currentPos=endPos+endL  # Skipper le tout, comme le kangourou
    else:
        buffer+=content[currentPos:]
        currentPos=len(content)

print(buffer)

