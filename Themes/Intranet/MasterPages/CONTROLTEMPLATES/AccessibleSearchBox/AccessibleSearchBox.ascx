﻿<%@ Assembly Name="$SharePoint.Project.AssemblyFullName$" %>
<%@ Assembly Name="Microsoft.Web.CommandUI, Version=14.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="SharePoint" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=14.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="Utilities" Namespace="Microsoft.SharePoint.Utilities" Assembly="Microsoft.SharePoint, Version=14.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="asp" Namespace="System.Web.UI" Assembly="System.Web.Extensions, Version=3.5.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35" %>
<%@ Import Namespace="Microsoft.SharePoint" %> 
<%@ Register Tagprefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=14.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="AccessibleSearchBox.ascx.cs" Inherits="WET.Theme.Intranet.CONTROLTEMPLATES.AccessibleSearchBox.AccessibleSearchBox" %>

<asp:Panel runat="server" ID="pnlSearch" DefaultButton="btnSearch">
    <asp:TextBox ID="txtSearch" runat="server"></asp:TextBox>
    <asp:Button ID="btnSearch" runat="server" OnClick="btnSearch_Click" UseSubmitBehavior="false" style="background-color:rgb(204,204,204) !important; color:black !important; border-bottom: 1px solid #999; border-bottom-left-radius:2px; border-bottom-right-radius:2px; border-left:1px solid #fff; border-right:1px solid #999; border-top:1px solid #fff; border-top-left-radius:2px; border-top-right-radius:2px; background-image:none !important; text-shadow:none !important;" />
</asp:Panel>