import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { ChainflipFacet, ChainflipFacetInterface } from "../ChainflipFacet";
type ChainflipFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class ChainflipFacet__factory extends ContractFactory {
    constructor(...args: ChainflipFacetConstructorParams);
    deploy(_chainflipVault: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ChainflipFacet>;
    getDeployTransaction(_chainflipVault: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): ChainflipFacet;
    connect(signer: Signer): ChainflipFacet__factory;
    static readonly bytecode = "0x60a060405234801561000f575f5ffd5b5060405161252f38038061252f83398101604081905261002e91610066565b6001600160a01b038116610055576040516306b7c75960e31b815260040160405180910390fd5b6001600160a01b0316608052610093565b5f60208284031215610076575f5ffd5b81516001600160a01b038116811461008c575f5ffd5b9392505050565b6080516124626100cd5f395f8181605d0152818161075a01528181610831015281816108e901528181610a020152610a9601526124625ff3fe608060405260043610610033575f3560e01c80630ad553b3146100375780637766d1ed1461004c578063ee3314a1146100a8575b5f5ffd5b61004a610045366004611b26565b6100bb565b005b348015610057575f5ffd5b5061007f7f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b61004a6100b6366004611b8b565b6102a1565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610136576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6101463447611c51565b90508461016b8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156101a2576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f036101df576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e001510361021c576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b858061010001511561025a576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61026c87608001518860c0015161048a565b610276878761053e565b5047905081811115610296576102965f846102918585611c51565b610b72565b50505f909155505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0161031c576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f61032c3447611c51565b90508680610100015161036b576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8761038e8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156103c5576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f03610402576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e001510361043f576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610453895f01518a60c001518a8a33610ba7565b60c08a0152610462898761053e565b504790508181111561047d5761047d5f846102918585611c51565b50505f9091555050505050565b805f036104c3576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff821661051c5780341015610518576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b61051873ffffffffffffffffffffffffffffffffffffffff8316333084610ceb565b5f61054c8360e00151610d43565b90505f610571846080015173ffffffffffffffffffffffffffffffffffffffff161590565b905060607311f111f111f111f111f111f111f111f111f111f173ffffffffffffffffffffffffffffffffffffffff168560a0015173ffffffffffffffffffffffffffffffffffffffff1603610692576105ca8480611c89565b90505f03610604576040517f6e70c56c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61060e8480611c89565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284375f9201919091525050505060e08601518651919250907ff9b69f466270c99522169d563c0a430e88c52865ec33b1cc36ee2a4a6ea5170b6106778780611c89565b604051610685929190611d38565b60405180910390a361074b565b5f8561012001516106a7578560a001516106b7565b6106b76060860160408701611d53565b905073ffffffffffffffffffffffffffffffffffffffff8116610706576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fffffffffffffffffffffffffffffffffffffffff000000000000000000000000606083901b1660208201526034016040516020818303038152906040529150505b816107835761078385608001517f00000000000000000000000000000000000000000000000000000000000000008760c00151610dc7565b846101200151156109985761079b6060850185611d73565b90505f036107d5576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b84515f906107e66060870187611d73565b8860a001516040516020016107fe9493929190611e37565b604051602081830303815290604052905082156108d25760c086015173ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016906307933dd290868561086a60408b0160208c01611fdd565b8660808c013561087d60a08e018e611c89565b6040518963ffffffff1660e01b815260040161089f979695949392919061204c565b5f604051808303818588803b1580156108b6575f5ffd5b505af11580156108c8573d5f5f3e3d5ffd5b5050505050610992565b73ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001663bbddc2fb858461092060408a0160208b01611fdd565b858a608001358c608001518d60c001518d8060a001906109409190611c89565b6040518a63ffffffff1660e01b8152600401610964999897969594939291906120b1565b5f604051808303815f87803b15801561097b575f5ffd5b505af115801561098d573d5f5f3e3d5ffd5b505050505b50610b34565b5f6109a66060860186611d73565b905011156109e0576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8115610a7f5760c085015173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169063dd687345908584610a3b60408a0160208b01611fdd565b610a4860a08b018b611c89565b6040518763ffffffff1660e01b8152600401610a6895949392919061213c565b5f604051808303818588803b15801561097b575f5ffd5b73ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000166304fc7da08483610acd6040890160208a01611fdd565b60808a015160c08b0151610ae460a08c018c611c89565b6040518863ffffffff1660e01b8152600401610b069796959493929190612185565b5f604051808303815f87803b158015610b1d575f5ffd5b505af1158015610b2f573d5f5f3e3d5ffd5b505050505b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f185604051610b6391906121e4565b60405180910390a15050505050565b73ffffffffffffffffffffffffffffffffffffffff8316610b9c57610b978282610df3565b505050565b610b97838383610e60565b5f82808203610be2576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f8585610bf0600185611c51565b818110610bff57610bff6122f7565b9050602002810190610c119190612324565b610c22906080810190606001611d53565b90505f610c2e82610ece565b905073ffffffffffffffffffffffffffffffffffffffff8216610c5857610c553482611c51565b90505b5f610c638888610f18565b9050610c6f8888611022565b610c7c8a8989898561108e565b5f82610c8785610ece565b610c919190611c51565b905089811015610cdb576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b90526024810182905260440160405180910390fd5b9450505050505b95945050505050565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f51141716610d3657637939f4245f526004601cfd5b5f60605260405250505050565b5f60018203610d5457506001919050565b61a4b18203610d6557506004919050565b660416edef1601be8203610d7b57506005919050565b6512309ce540018203610d9057506003919050565b6040517f63b7b64100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b919050565b610b978383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611439565b73ffffffffffffffffffffffffffffffffffffffff8216610e40576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61051873ffffffffffffffffffffffffffffffffffffffff831682611566565b73ffffffffffffffffffffffffffffffffffffffff8216610ead576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610b9773ffffffffffffffffffffffffffffffffffffffff8416838361157f565b5f73ffffffffffffffffffffffffffffffffffffffff821615610f1057610f0b73ffffffffffffffffffffffffffffffffffffffff8316306115c8565b610f12565b475b92915050565b6060815f8167ffffffffffffffff811115610f3557610f356118f6565b604051908082528060200260200182016040528015610f5e578160200160208202803683370190505b5090505f805b8381101561101757868682818110610f7e57610f7e6122f7565b9050602002810190610f909190612324565b610fa1906080810190606001611d53565b9150610fac82610ece565b838281518110610fbe57610fbe6122f7565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff821661100f5734838281518110610ff757610ff76122f7565b6020026020010181815161100b9190611c51565b9052505b600101610f64565b509095945050505050565b5f5b81811015610b97573683838381811061103f5761103f6122f7565b90506020028101906110519190612324565b905061106360e0820160c08301612360565b156110855761108561107b6060830160408401611d53565b826080013561048a565b50600101611024565b838383838260018114611355575f85856110a9600185611c51565b8181106110b8576110b86122f7565b90506020028101906110ca9190612324565b6110db906080810190606001611d53565b90505f89815b8181101561128257368d8d838181106110fc576110fc6122f7565b905060200281019061110e9190612324565b905061113d6111236060830160408401611d53565b73ffffffffffffffffffffffffffffffffffffffff161590565b8061119f575061119f6111566040830160208401611d53565b73ffffffffffffffffffffffffffffffffffffffff165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b80156111b657506111b66111566020830183611d53565b801561123957506112396111cd60a0830183611c89565b6111db916004915f91612379565b6111e4916123a0565b7fffffffff00000000000000000000000000000000000000000000000000000000165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b61126f576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6112798f826115fb565b506001016110e1565b505f90505b611292600185611c51565b81101561134d575f8888838181106112ac576112ac6122f7565b90506020028101906112be9190612324565b6112cf906080810190606001611d53565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161461134457858281518110611316576113166122f7565b602002602001015161132782610ece565b6113319190611c51565b9250821561134457611344818885610b72565b50600101611287565b50505061142d565b875f5b8181101561142a57368b8b83818110611373576113736122f7565b90506020028101906113859190612324565b905061139a6111236060830160408401611d53565b806113b357506113b36111566040830160208401611d53565b80156113ca57506113ca6111566020830183611d53565b80156113e157506113e16111cd60a0830183611c89565b611417576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6114218d826115fb565b50600101611358565b50505b50505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8416156115605773ffffffffffffffffffffffffffffffffffffffff83166114a2576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa158015611515573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906115399190612406565b10156115605761156073ffffffffffffffffffffffffffffffffffffffff8516848361186e565b50505050565b5f385f3884865af16105185763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f511417166115bf576390b8ec185f526004601cfd5b5f603452505050565b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b61161361160b6020830183611d53565b6017903b1190565b611649576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f819003611688576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f61169c6111236060850160408601611d53565b6116a6575f6116ac565b82608001355b90505f6116c76116c26080860160608701611d53565b610ece565b9050815f036116fd576116fd6116e36060860160408701611d53565b6116f36040870160208801611d53565b8660800135610dc7565b5f8061170c6020870187611d53565b73ffffffffffffffffffffffffffffffffffffffff168461173060a0890189611c89565b60405161173e92919061241d565b5f6040518083038185875af1925050503d805f8114611778576040519150601f19603f3d011682016040523d82523d5f602084013e61177d565b606091505b50915091508161179057611790816118ec565b5f6117a46116c26080890160608a01611d53565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b38886117d560208a018a611d53565b6117e560608b0160408c01611d53565b6117f560808c0160608d01611d53565b8b608001358987116118075786611811565b6118118a88611c51565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f511417166115bf575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f511417166115bf57633e3f8f735f526004601cfd5b8051602082018181fd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff81118282101715611947576119476118f6565b60405290565b5f82601f83011261195c575f5ffd5b813567ffffffffffffffff811115611976576119766118f6565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810167ffffffffffffffff811182821017156119c3576119c36118f6565b6040528181528382016020018510156119da575f5ffd5b816020850160208301375f918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff81168114610dc2575f5ffd5b80358015158114610dc2575f5ffd5b5f6101408284031215611a39575f5ffd5b611a41611923565b823581529050602082013567ffffffffffffffff811115611a60575f5ffd5b611a6c8482850161194d565b602083015250604082013567ffffffffffffffff811115611a8b575f5ffd5b611a978482850161194d565b604083015250611aa9606083016119f6565b6060820152611aba608083016119f6565b6080820152611acb60a083016119f6565b60a082015260c0828101359082015260e08083013590820152611af16101008301611a19565b610100820152611b046101208301611a19565b61012082015292915050565b5f60c08284031215611b20575f5ffd5b50919050565b5f5f60408385031215611b37575f5ffd5b823567ffffffffffffffff811115611b4d575f5ffd5b611b5985828601611a28565b925050602083013567ffffffffffffffff811115611b75575f5ffd5b611b8185828601611b10565b9150509250929050565b5f5f5f5f60608587031215611b9e575f5ffd5b843567ffffffffffffffff811115611bb4575f5ffd5b611bc087828801611a28565b945050602085013567ffffffffffffffff811115611bdc575f5ffd5b8501601f81018713611bec575f5ffd5b803567ffffffffffffffff811115611c02575f5ffd5b8760208260051b8401011115611c16575f5ffd5b60209190910193509150604085013567ffffffffffffffff811115611c39575f5ffd5b611c4587828801611b10565b91505092959194509250565b81810381811115610f12577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611cbc575f5ffd5b83018035915067ffffffffffffffff821115611cd6575f5ffd5b602001915036819003821315611cea575f5ffd5b9250929050565b81835281816020850137505f602082840101525f60207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b602081525f611d4b602083018486611cf1565b949350505050565b5f60208284031215611d63575f5ffd5b611d6c826119f6565b9392505050565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611da6575f5ffd5b83018035915067ffffffffffffffff821115611dc0575f5ffd5b6020019150600581901b3603821315611cea575f5ffd5b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611e0a575f5ffd5b830160208101925035905067ffffffffffffffff811115611e29575f5ffd5b803603821315611cea575f5ffd5b5f60608201868352606060208401528085825260808401905060808660051b8501019150865f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21893603015b88821015611fb6577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff808786030184528235818112611ebf575f5ffd5b8a0173ffffffffffffffffffffffffffffffffffffffff611edf826119f6565b16865273ffffffffffffffffffffffffffffffffffffffff611f03602083016119f6565b16602087015273ffffffffffffffffffffffffffffffffffffffff611f2a604083016119f6565b166040870152611f3c606082016119f6565b73ffffffffffffffffffffffffffffffffffffffff16606087015260808181013590870152611f6e60a0820182611dd7565b60e060a0890152611f8360e089018284611cf1565b915050611f9260c08301611a19565b80151560c08901529150955050602093840193929092019160019190910190611e83565b50505073ffffffffffffffffffffffffffffffffffffffff85166040850152509050610ce2565b5f60208284031215611fed575f5ffd5b813563ffffffff81168114611d6c575f5ffd5b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b63ffffffff8816815260c060208201525f61206a60c0830189612000565b63ffffffff8816604084015282810360608401526120888188612000565b905085608084015282810360a08401526120a3818587611cf1565b9a9950505050505050505050565b63ffffffff8a16815261010060208201525f6120d161010083018b612000565b63ffffffff8a16604084015282810360608401526120ef818a612000565b905087608084015273ffffffffffffffffffffffffffffffffffffffff871660a08401528560c084015282810360e084015261212c818587611cf1565b9c9b505050505050505050505050565b63ffffffff86168152608060208201525f61215a6080830187612000565b63ffffffff861660408401528281036060840152612179818587611cf1565b98975050505050505050565b63ffffffff8816815260c060208201525f6121a360c0830189612000565b63ffffffff8816604084015273ffffffffffffffffffffffffffffffffffffffff8716606084015285608084015282810360a08401526120a3818587611cf1565b60208152815160208201525f6020830151610140604084015261220b610160840182612000565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08483030160608501526122468282612000565b9150506060840151612270608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e08401516101008401526101008401516122df61012085018215159052565b50610120840151801515610140850152509392505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112612356575f5ffd5b9190910192915050565b5f60208284031215612370575f5ffd5b611d6c82611a19565b5f5f85851115612387575f5ffd5b83861115612393575f5ffd5b5050820193919092039150565b80357fffffffff0000000000000000000000000000000000000000000000000000000081169060048410156123ff577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b5f60208284031215612416575f5ffd5b5051919050565b818382375f910190815291905056fea264697066735822122011dc1aee8c52932fcb98e95e68a80745e172a8e1846e04dabfea62244ab0992564736f6c634300081d0033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_chainflipVault";
            readonly type: "address";
            readonly internalType: "contract IChainflipVault";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "chainflipVault";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract IChainflipVault";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaChainflip";
        readonly inputs: readonly [{
            readonly name: "_bridgeData";
            readonly type: "tuple";
            readonly internalType: "struct ILiFi.BridgeData";
            readonly components: readonly [{
                readonly name: "transactionId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "bridge";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "integrator";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "referrer";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "sendingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "receiver";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "minAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "destinationChainId";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "hasSourceSwaps";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "hasDestinationCall";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }, {
            readonly name: "_chainflipData";
            readonly type: "tuple";
            readonly internalType: "struct ChainflipFacet.ChainflipData";
            readonly components: readonly [{
                readonly name: "nonEVMReceiver";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "dstToken";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "dstCallReceiver";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "dstCallSwapData";
                readonly type: "tuple[]";
                readonly internalType: "struct LibSwap.SwapData[]";
                readonly components: readonly [{
                    readonly name: "callTo";
                    readonly type: "address";
                    readonly internalType: "address";
                }, {
                    readonly name: "approveTo";
                    readonly type: "address";
                    readonly internalType: "address";
                }, {
                    readonly name: "sendingAssetId";
                    readonly type: "address";
                    readonly internalType: "address";
                }, {
                    readonly name: "receivingAssetId";
                    readonly type: "address";
                    readonly internalType: "address";
                }, {
                    readonly name: "fromAmount";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "callData";
                    readonly type: "bytes";
                    readonly internalType: "bytes";
                }, {
                    readonly name: "requiresDeposit";
                    readonly type: "bool";
                    readonly internalType: "bool";
                }];
            }, {
                readonly name: "gasAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "cfParameters";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaChainflip";
        readonly inputs: readonly [{
            readonly name: "_bridgeData";
            readonly type: "tuple";
            readonly internalType: "struct ILiFi.BridgeData";
            readonly components: readonly [{
                readonly name: "transactionId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "bridge";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "integrator";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "referrer";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "sendingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "receiver";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "minAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "destinationChainId";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "hasSourceSwaps";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "hasDestinationCall";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }, {
            readonly name: "_swapData";
            readonly type: "tuple[]";
            readonly internalType: "struct LibSwap.SwapData[]";
            readonly components: readonly [{
                readonly name: "callTo";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "approveTo";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "sendingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "receivingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "fromAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "callData";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "requiresDeposit";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }, {
            readonly name: "_chainflipData";
            readonly type: "tuple";
            readonly internalType: "struct ChainflipFacet.ChainflipData";
            readonly components: readonly [{
                readonly name: "nonEVMReceiver";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "dstToken";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "dstCallReceiver";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "dstCallSwapData";
                readonly type: "tuple[]";
                readonly internalType: "struct LibSwap.SwapData[]";
                readonly components: readonly [{
                    readonly name: "callTo";
                    readonly type: "address";
                    readonly internalType: "address";
                }, {
                    readonly name: "approveTo";
                    readonly type: "address";
                    readonly internalType: "address";
                }, {
                    readonly name: "sendingAssetId";
                    readonly type: "address";
                    readonly internalType: "address";
                }, {
                    readonly name: "receivingAssetId";
                    readonly type: "address";
                    readonly internalType: "address";
                }, {
                    readonly name: "fromAmount";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "callData";
                    readonly type: "bytes";
                    readonly internalType: "bytes";
                }, {
                    readonly name: "requiresDeposit";
                    readonly type: "bool";
                    readonly internalType: "bool";
                }];
            }, {
                readonly name: "gasAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "cfParameters";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "event";
        readonly name: "AssetSwapped";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: false;
            readonly internalType: "bytes32";
        }, {
            readonly name: "dex";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "fromAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "toAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "fromAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "toAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "timestamp";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "BridgeToNonEVMChain";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "destinationChainId";
            readonly type: "uint256";
            readonly indexed: true;
            readonly internalType: "uint256";
        }, {
            readonly name: "receiver";
            readonly type: "bytes";
            readonly indexed: false;
            readonly internalType: "bytes";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiGenericSwapCompleted";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "integrator";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "referrer";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "fromAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "toAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "fromAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "toAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiSwappedGeneric";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "integrator";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "referrer";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "fromAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "toAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "fromAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "toAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiTransferCompleted";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "receivingAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "timestamp";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiTransferRecovered";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "receivingAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "timestamp";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiTransferStarted";
        readonly inputs: readonly [{
            readonly name: "bridgeData";
            readonly type: "tuple";
            readonly indexed: false;
            readonly internalType: "struct ILiFi.BridgeData";
            readonly components: readonly [{
                readonly name: "transactionId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "bridge";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "integrator";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "referrer";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "sendingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "receiver";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "minAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "destinationChainId";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "hasSourceSwaps";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "hasDestinationCall";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }];
        readonly anonymous: false;
    }, {
        readonly type: "error";
        readonly name: "CannotBridgeToSameNetwork";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "ContractCallNotAllowed";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "CumulativeSlippageTooHigh";
        readonly inputs: readonly [{
            readonly name: "minAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "receivedAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }, {
        readonly type: "error";
        readonly name: "EmptyNonEvmAddress";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InformationMismatch";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidAmount";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidConfig";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidContract";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidReceiver";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NoSwapDataProvided";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NoSwapFromZeroBalance";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NullAddrIsNotAValidSpender";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "ReentrancyError";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "UnsupportedChainflipChainId";
        readonly inputs: readonly [];
    }];
    static createInterface(): ChainflipFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ChainflipFacet;
}
export {};
