﻿The element to accept input of a single selection out of a set of options. 

[inset]

```cs
public class RadioGroupExample : BaseVM
{
   public enum Weather
   {
      Sunny,
      Cloudy,
      Rainy,
      Foggy
   }

   public RadioGroupExample()
   {
      var options = new Dictionary<Weather, string>
      {
         { Weather.Sunny, "Sunny" },
         { Weather.Cloudy, "Cloudy" },
         { Weather.Rainy, "Rainy" },
         { Weather.Foggy, "Foggy" },
      }
      .Select(kvp => KeyValuePair.Create($"{(int)kvp.Key}", kvp.Value));

      AddProperty("RadioGroup_Weather", Weather.Sunny)
         .WithAttribute(this, new RadioGroupAttribute
         {
            Label = "Weather:",
            Options = options.ToArray()
         });
   }
}
```

#### Property Types

```jsx
static propTypes = {
   // Identifies the associated view model property.
   id: PropTypes.string.isRequired,

   // Disables the field.
   disable: PropTypes.bool,

   // Text or component for the field's label.
   label: PropTypes.oneOfType([ PropTypes.string, PropTypes.object ]),

   // Displays the label text horizontally to the left of the field.
   horizontal: PropTypes.bool,

   // Replaces the input field with plain text.
   plainText: PropTypes.bool
};
```

#### Server-side Attributes

```cs
public class RadioGroupAttribute
{
   public string Label { get; set; }
   public KeyValuePair<string, string>[] Options { get; set; }
}
```