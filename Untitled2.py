#!/usr/bin/env python
# coding: utf-8

# In[1]:


import pandas as pd
import numpy as np

# Sample data for demonstration
data = {
    'price': np.random.randint(10, 500, 100),
    'number_available_in_stock': np.random.randint(0, 1000, 100),
    'number_of_reviews': np.random.randint(0, 500, 100),
    'average_review_rating': np.random.uniform(1, 5, 100)
}

# Create DataFrame
df = pd.DataFrame(data)

# Save DataFrame to CSV
df.to_csv('sample_amazon_data.csv', index=False)


# In[ ]:




