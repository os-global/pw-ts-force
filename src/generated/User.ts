import { Rest, RestObject, QueryOpts, SObject, sField, SalesforceFieldType, SFieldProperties, FieldResolver, SOQLQueryParams, buildQuery, FieldProps } from "ts-force";

export type UserFields = Partial<FieldProps<User>>;

/**
 * Generated class for User
 */
export class User extends RestObject {
    @sField({ apiName: 'Id', createable: false, updateable: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.ID, salesforceLabel: 'User ID', externalId: false })
    public readonly id?: string | null;
    @sField({ apiName: 'Username', createable: true, updateable: true, required: true, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.STRING, salesforceLabel: 'Username', externalId: false })
    public username?: string | null;
    @sField({ apiName: 'LastName', createable: true, updateable: true, required: true, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.STRING, salesforceLabel: 'Last Name', externalId: false })
    public lastName?: string | null;
    @sField({ apiName: 'FirstName', createable: true, updateable: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.STRING, salesforceLabel: 'First Name', externalId: false })
    public firstName?: string | null;

    constructor(fields?: UserFields, restInstance?: Rest) {
        super('User', restInstance);
        this.id = void 0;
        this.username = void 0;
        this.lastName = void 0;
        this.firstName = void 0;
        this.__UUID = User.__UUID;
        this.initObject(fields);
        return new Proxy(this, this.safeUpdateProxyHandler);
    }

    public static API_NAME: 'User' = 'User';
    public readonly _TYPE_: 'User' = 'User';
    public static __UUID = Symbol();
    private static _fields: { [P in keyof FieldProps<User>]: SFieldProperties; };

    public static get FIELDS() {
        return this._fields = this._fields ? this._fields : User.getPropertiesMeta<FieldProps<User>, User>(User)
    }

    public static async retrieve(qryParam: ((fields: FieldResolver<User>) => SOQLQueryParams) | string, opts?: QueryOpts): Promise<User[]> {

        const qry = typeof qryParam === 'function' ? buildQuery(User, qryParam) : qryParam;
        return await RestObject.query<User>(User, qry, opts);

    }

    public static fromSFObject(sob: SObject): User {
        return new User().mapFromQuery(sob);
    }
}
