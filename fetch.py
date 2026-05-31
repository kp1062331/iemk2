import urllib.request
import re

url = 'https://www.wix.com/website-template/view/html/3280'
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
try:
    html = urllib.request.urlopen(req).read().decode('utf-8')
    title_match = re.search(r'<title>(.*?)</title>', html)
    print("Title:", title_match.group(1) if title_match else "No title")
    
    og_title = re.search(r'<meta property="og:title" content="(.*?)"', html)
    print("OG Title:", og_title.group(1) if og_title else "No og:title")
    
    og_desc = re.search(r'<meta property="og:description" content="(.*?)"', html)
    print("OG Desc:", og_desc.group(1) if og_desc else "No og:desc")
    
    # Try to find template name inside JSON state if possible
    template_name = re.search(r'"templateName":"(.*?)"', html)
    print("Template Name:", template_name.group(1) if template_name else "No explicit name")
except Exception as e:
    print("Error:", e)
