$blogDir = "C:\Users\user\gold-web-v2\my-gold-price\app\blog"
$results = @()
$allSlugs = Get-ChildItem -Path $blogDir -Directory | Select-Object -ExpandProperty Name

foreach ($slug in $allSlugs) {
    $tsxPath = Join-Path $blogDir "$slug\page.tsx"
    if (-not (Test-Path $tsxPath)) {
        $results += [PSCustomObject]@{
            Slug = $slug
            Status = "FILE_NOT_FOUND"
            FAQCount = 0
            HasAISummary = $false
            TitleHasEmoji = $false
            TitleHasDate = $false
            InternalLinkCount = 0
            HasBlogPostingSchema = $false
            HasFAQSchema = $false
            WordCount = 0
            HasTable = $false
            Notes = "page.tsx not found"
        }
        continue
    }
    
    $content = Get-Content -Path $tsxPath -Raw -ErrorAction SilentlyContinue
    if (-not $content) {
        $results += [PSCustomObject]@{
            Slug = $slug
            Status = "EMPTY_FILE"
            FAQCount = 0
            HasAISummary = $false
            TitleHasEmoji = $false
            TitleHasDate = $false
            InternalLinkCount = 0
            HasBlogPostingSchema = $false
            HasFAQSchema = $false
            WordCount = 0
            HasTable = $false
            Notes = "File empty or unreadable"
        }
        continue
    }
    
    # Check AI summary (重點摘要 or AI 摘要)
    $hasAISummary = $false
    if ($content -cmatch "重點摘要") { $hasAISummary = $true }
    if ($content -cmatch "AI 摘要") { $hasAISummary = $true }
    if ($content -cmatch "AI摘要") { $hasAISummary = $true }
    
    # Check title for emoji
    $titleHasEmoji = $false
    if ($content -cmatch "<title") {
        if ($content -cmatch "📌") { $titleHasEmoji = $true }
        if ($content -cmatch "✅") { $titleHasEmoji = $true }
        if ($content -cmatch "❌") { $titleHasEmoji = $true }
        if ($content -cmatch "💰") { $titleHasEmoji = $true }
        if ($content -cmatch "🔥") { $titleHasEmoji = $true }
        if ($content -cmatch "⭐") { $titleHasEmoji = $true }
        if ($content -cmatch "🎯") { $titleHasEmoji = $true }
        if ($content -cmatch "💡") { $titleHasEmoji = $true }
        if ($content -cmatch "⚠️") { $titleHasEmoji = $true }
        if ($content -cmatch "✔️") { $titleHasEmoji = $true }
        if ($content -cmatch "❓") { $titleHasEmoji = $true }
        if ($content -cmatch "🕐") { $titleHasEmoji = $true }
    }
    
    # Check title for date patterns
    $titleHasDate = $false
    if ($content -cmatch "20[0-9][0-9]") { $titleHasDate = $true }
    if ($content -cmatch "20[0-9][0-9]年") { $titleHasDate = $true }
    
    # Check FAQ count in schema - count Question type appearances
    $faqCount = 0
    $faqCount = ([regex]::Matches($content, [char]34 + "type" + [char]34 + "\s*:\s*" + [char]34 + "Question" + [char]34, [System.Text.RegularExpressions.RegexOptions]::IgnoreCase)).Count
    
    # Check FAQPage schema exists
    $hasFAQSchema = $content -cmatch "FAQPage"
    
    # Check BlogPosting schema
    $hasBlogPostingSchema = $content -cmatch "BlogPosting"
    
    # Count internal links (links to other blog posts)
    $allLinks = [regex]::Matches($content, '/blog/[a-z0-9-]+')
    $uniqueLinks = @{}
    foreach ($m in $allLinks) {
        $uniqueLinks[$m.Value] = 1
    }
    $internalLinkCount = $uniqueLinks.Count
    
    # Check for HTML table
    $hasTable = $content -cmatch "<table"
    if (-not $hasTable) { $hasTable = $content -cmatch "<Table" }
    
    # Rough word count
    $wordCount = $content.Length
    
    $results += [PSCustomObject]@{
        Slug = $slug
        Status = "OK"
        FAQCount = $faqCount
        HasAISummary = $hasAISummary
        TitleHasEmoji = $titleHasEmoji
        TitleHasDate = $titleHasDate
        InternalLinkCount = $internalLinkCount
        HasBlogPostingSchema = $hasBlogPostingSchema
        HasFAQSchema = $hasFAQSchema
        WordCount = $wordCount
        HasTable = $hasTable
        Notes = ""
    }
}

$results | Sort-Object -Property Slug | Format-Table -AutoSize
$results | Export-Csv -Path "C:\Users\user\gold-web-v2\blog-seo-scan-results.csv" -NoTypeInformation -Encoding UTF8
Write-Host "Total articles: $($results.Count)"
Write-Host "Results saved"
