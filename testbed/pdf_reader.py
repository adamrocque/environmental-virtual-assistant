import pandas as pd
from tabula import read_pdf

basic_table = read_pdf("testbed\Invoice.pdf", pages="all")
# aevi_table = read_pdf("testbed\CECInvoice00001.pdf", pages="all")
# avling_table = read_pdf("testbed\BillPopLogin.aspx-2.pdf", pages="all")


working_table = basic_table
# print(basic_table)
# print(aevi_table)
# print(avling_table)
# print(type(avling_table))

working_df = pd.DataFrame(working_table)

print(working_df)