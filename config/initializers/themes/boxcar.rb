::Spina::Theme.register do |theme|
  theme.name = "boxcar"
  theme.title = "Boxcar"

  theme.page_parts = [
    {
      name: "text",
      title: "Text",
      partable_type: "Spina::Text"
    },
    {
      name: "images",
      title: "Images",
      partable_type: "Spina::PhotoCollection"
    }
  ]

  theme.view_templates = [
    {
      name: "homepage",
      title: "Homepage",
      page_parts: %( text )
    },
    {
      name: "show",
      title: "Default",
      description: "A simple page",
      usage: "Use for your content",
      page_parts:   %( text )
    }
  ]

  theme.custom_pages = [
    {
      name: "homepage",
      title: "Homepage",
      deletable: false,
      view_template: "homepage"
    }
  ]

  theme.navigations = [
     {
      name: "main",
      label: "Main navigation",
      auto_add_pages: true
    }
  ]
end
