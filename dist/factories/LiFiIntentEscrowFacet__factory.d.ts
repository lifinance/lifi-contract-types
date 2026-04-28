import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { LiFiIntentEscrowFacet, LiFiIntentEscrowFacetInterface } from "../LiFiIntentEscrowFacet";
type LiFiIntentEscrowFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class LiFiIntentEscrowFacet__factory extends ContractFactory {
    constructor(...args: LiFiIntentEscrowFacetConstructorParams);
    deploy(_inputSettler: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<LiFiIntentEscrowFacet>;
    getDeployTransaction(_inputSettler: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): LiFiIntentEscrowFacet;
    connect(signer: Signer): LiFiIntentEscrowFacet__factory;
    static readonly bytecode = "0x60a060405234801561000f575f5ffd5b5060405161260538038061260583398101604081905261002e91610066565b6001600160a01b038116610055576040516306b7c75960e31b815260040160405180910390fd5b6001600160a01b0316608052610093565b5f60208284031215610076575f5ffd5b81516001600160a01b038116811461008c575f5ffd5b9392505050565b60805161254d6100b85f395f81816048015281816108b20152610af9015261254d5ff3fe608060405260043610610033575f3560e01c80631fe5bb311461003757806373e72e5a14610093578063cd3c02ae146100a8575b5f5ffd5b348015610042575f5ffd5b5061006a7f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b6100a66100a1366004611bb5565b6100c7565b005b3480156100b3575f5ffd5b506100a66100c2366004611c7b565b610351565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610142576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181556080850151859073ffffffffffffffffffffffffffffffffffffffff16610199576040517f5ded599700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b335f6101a53447611ce0565b9050878061010001516101e4576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b886102078160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561023e576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f0361027b576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f61028c6060890160408a01611d18565b905073ffffffffffffffffffffffffffffffffffffffff81166102db576040517f89b30fbf00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f6102f08c5f01518d60c001518d8d8661057d565b90508b60c0015181111561031c5761031c8c60800151838e60c00151846103179190611ce0565b6106bf565b6103268c8a6106f4565b50479250505081811115610343576103435f846103178585611ce0565b50505f909255505050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016103cc576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181556080830151839073ffffffffffffffffffffffffffffffffffffffff16610423576040517f5ded599700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b836104468160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561047d576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f036104ba576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b84806101000151156104f8576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f6105096060870160408801611d18565b73ffffffffffffffffffffffffffffffffffffffff1603610556576040517f89b30fbf00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61056886608001518760c00151610c72565b61057286866106f4565b50505f909155505050565b5f828082036105b8576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f85856105c6600185611ce0565b8181106105d5576105d5611d38565b90506020028101906105e79190611d65565b6105f8906080810190606001611d18565b90505f61060482610d26565b905073ffffffffffffffffffffffffffffffffffffffff821661062e5761062b3482611ce0565b90505b5f6106398888610d70565b90506106458888610e7a565b6106528a89898985610ee6565b5f8261065d85610d26565b6106679190611ce0565b9050898110156106b1576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b90526024810182905260440160405180910390fd5b9a9950505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff83166106e9576106e4828261112e565b505050565b6106e483838361119b565b5f610703610160830183611da1565b9050905082610120015115155f821115151461074b576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8161014001355f03610789576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6020820135806107c5576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b7311f111f111f111f111f111f111f111f111f111f173ffffffffffffffffffffffffffffffffffffffff168460a0015173ffffffffffffffffffffffffffffffffffffffff160361084f5760e084015184516040518381527f815cd8dc72093a13fe3577112c391b6279303956526382ab98772d0239dbf78c9060200160405180910390a36108a2565b60a084015173ffffffffffffffffffffffffffffffffffffffff1681146108a2576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608084015160c08501516108d7827f000000000000000000000000000000000000000000000000000000000000000083611209565b60408051602081019091525f81528415610960578535935083610926576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8651610936610160880188611da1565b886020013560405160200161094e9493929190611eb3565b60405160208183030381529060405290505b6040805160018082528183019092525f91816020015b6109b86040518061010001604052805f81526020015f81526020015f81526020015f81526020015f81526020015f815260200160608152602001606081525090565b8152602001906001900390816109765790505090506040518061010001604052808860e00135815260200188610100013581526020018960e0015181526020018861012001358152602001886101400135815260200186815260200183815260200188806101800190610a2b9190612048565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284375f9201829052509390945250508351849250610a7157610a71611d38565b60209081029190910101526040805160018082528183019092525f91816020015b610a9a611961565b815260200190600190039081610a9257905050905060405180604001604052808673ffffffffffffffffffffffffffffffffffffffff16815260200185815250815f81518110610aec57610aec611d38565b60200260200101819052507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16637515fd566040518061010001604052808b6040016020810190610b529190611d18565b73ffffffffffffffffffffffffffffffffffffffff1681526060808d0135602083015246604083015201610b8c60a08d0160808e016120a9565b63ffffffff168152602001610ba760c08d0160a08e016120a9565b63ffffffff168152602001610bc260e08d0160c08e01611d18565b73ffffffffffffffffffffffffffffffffffffffff168152602001848152602001858152506040518263ffffffff1660e01b8152600401610c039190612256565b5f604051808303815f87803b158015610c1a575f5ffd5b505af1158015610c2c573d5f5f3e3d5ffd5b505050507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f189604051610c5f9190612338565b60405180910390a1505050505050505050565b805f03610cab576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610d045780341015610d00576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b610d0073ffffffffffffffffffffffffffffffffffffffff8316333084611235565b5f73ffffffffffffffffffffffffffffffffffffffff821615610d6857610d6373ffffffffffffffffffffffffffffffffffffffff83163061128d565b610d6a565b475b92915050565b6060815f8167ffffffffffffffff811115610d8d57610d8d61197f565b604051908082528060200260200182016040528015610db6578160200160208202803683370190505b5090505f5f5b83811015610e6f57868682818110610dd657610dd6611d38565b9050602002810190610de89190611d65565b610df9906080810190606001611d18565b9150610e0482610d26565b838281518110610e1657610e16611d38565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610e675734838281518110610e4f57610e4f611d38565b60200260200101818151610e639190611ce0565b9052505b600101610dbc565b509095945050505050565b5f5b818110156106e45736838383818110610e9757610e97611d38565b9050602002810190610ea99190611d65565b9050610ebb60e0820160c0830161244b565b15610edd57610edd610ed36060830160408401611d18565b8260800135610c72565b50600101610e7c565b83838383825f80805b8381101561111257368c8c83818110610f0a57610f0a611d38565b9050602002810190610f1c9190611d65565b9050610f2b6020820182611d18565b9350610f3d6040820160208301611d18565b9250610fe084610f5060a0840184612048565b610f5e916004915f91612464565b610f679161248b565b73ffffffffffffffffffffffffffffffffffffffff919091165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f24602090815260408083207fffffffff000000000000000000000000000000000000000000000000000000009094168352929052205460ff1690565b15806110c85750611014610ffa6060830160408401611d18565b73ffffffffffffffffffffffffffffffffffffffff161590565b15801561104d57508373ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614155b80156110c8575073ffffffffffffffffffffffffffffffffffffffff83165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f24602090815260408083207fffffffff00000000000000000000000000000000000000000000000000000000845290915290205460ff16155b156110ff576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6111098e826112c0565b50600101610eef565b50505050611123848484845f611533565b505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff821661117b576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610d0073ffffffffffffffffffffffffffffffffffffffff83168261174a565b73ffffffffffffffffffffffffffffffffffffffff82166111e8576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6106e473ffffffffffffffffffffffffffffffffffffffff84168383611763565b6106e48383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6117ac565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f5114171661128057637939f4245f526004601cfd5b5f60605260405250505050565b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b6112d86112d06020830183611d18565b6017903b1190565b61130e576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f81900361134d576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f611361610ffa6060850160408601611d18565b61136b575f611371565b82608001355b90505f61138c6113876080860160608701611d18565b610d26565b9050815f036113c2576113c26113a86060860160408701611d18565b6113b86040870160208801611d18565b8660800135611209565b5f806113d16020870187611d18565b73ffffffffffffffffffffffffffffffffffffffff16846113f560a0890189612048565b6040516114039291906124f1565b5f6040518083038185875af1925050503d805f811461143d576040519150601f19603f3d011682016040523d82523d5f602084013e611442565b606091505b50915091508161145557611455816118d9565b5f6114696113876080890160608a01611d18565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388861149a60208a018a611d18565b6114aa60608b0160408c01611d18565b6114ba60808c0160608d01611d18565b8b608001358987116114cc57866114d6565b6114d68a88611ce0565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b835f8682611542600182611ce0565b81811061155157611551611d38565b90506020028101906115639190611d65565b611574906080810190606001611d18565b90505f5f5f5f5f5f5f5b8881101561173a5761159160018a611ce0565b811080156115a0575088600114155b1561167b578d8d828181106115b7576115b7611d38565b90506020028101906115c99190611d65565b6115da906080810190606001611d18565b95508773ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff161461167b578a818151811061162157611621611d38565b602002602001015161163287610d26565b61163c9190611ce0565b965073ffffffffffffffffffffffffffffffffffffffff861615611660575f611662565b895b93508387111561167b5761167b868d610317878b611ce0565b8d8d8281811061168d5761168d611d38565b905060200281019061169f9190611d65565b6116b0906060810190604001611d18565b94506116bb85610d26565b925073ffffffffffffffffffffffffffffffffffffffff8516156116df575f6116e1565b895b9150818311801561171e57508773ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614155b1561173257611732858d6103178587611ce0565b60010161157e565b5050505050505050505050505050565b5f385f3884865af1610d005763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f511417166117a3576390b8ec185f526004601cfd5b5f603452505050565b73ffffffffffffffffffffffffffffffffffffffff8416156118d35773ffffffffffffffffffffffffffffffffffffffff8316611815576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa158015611888573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906118ac9190612500565b10156118d3576118d373ffffffffffffffffffffffffffffffffffffffff851684836118e3565b50505050565b8051602082018181fd5b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f511417166117a3575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f511417166117a357633e3f8f735f526004601cfd5b60405180604001604052806002906020820280368337509192915050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff811182821017156119d0576119d061197f565b60405290565b5f82601f8301126119e5575f5ffd5b813567ffffffffffffffff8111156119ff576119ff61197f565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810167ffffffffffffffff81118282101715611a4c57611a4c61197f565b604052818152838201602001851015611a63575f5ffd5b816020850160208301375f918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff81168114611aa2575f5ffd5b919050565b80358015158114611aa2575f5ffd5b5f6101408284031215611ac7575f5ffd5b611acf6119ac565b823581529050602082013567ffffffffffffffff811115611aee575f5ffd5b611afa848285016119d6565b602083015250604082013567ffffffffffffffff811115611b19575f5ffd5b611b25848285016119d6565b604083015250611b3760608301611a7f565b6060820152611b4860808301611a7f565b6080820152611b5960a08301611a7f565b60a082015260c0828101359082015260e08083013590820152611b7f6101008301611aa7565b610100820152611b926101208301611aa7565b61012082015292915050565b5f6101a08284031215611baf575f5ffd5b50919050565b5f5f5f5f60608587031215611bc8575f5ffd5b843567ffffffffffffffff811115611bde575f5ffd5b611bea87828801611ab6565b945050602085013567ffffffffffffffff811115611c06575f5ffd5b8501601f81018713611c16575f5ffd5b803567ffffffffffffffff811115611c2c575f5ffd5b8760208260051b8401011115611c40575f5ffd5b60209190910193509150604085013567ffffffffffffffff811115611c63575f5ffd5b611c6f87828801611b9e565b91505092959194509250565b5f5f60408385031215611c8c575f5ffd5b823567ffffffffffffffff811115611ca2575f5ffd5b611cae85828601611ab6565b925050602083013567ffffffffffffffff811115611cca575f5ffd5b611cd685828601611b9e565b9150509250929050565b81810381811115610d6a577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f60208284031215611d28575f5ffd5b611d3182611a7f565b9392505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112611d97575f5ffd5b9190910192915050565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611dd4575f5ffd5b83018035915067ffffffffffffffff821115611dee575f5ffd5b6020019150600581901b3603821315611e05575f5ffd5b9250929050565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611e3f575f5ffd5b830160208101925035905067ffffffffffffffff811115611e5e575f5ffd5b803603821315611e05575f5ffd5b81835281816020850137505f602082840101525f60207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b5f60608201868352606060208401528085825260808401905060808660051b8501019150865f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21893603015b88821015612032577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff808786030184528235818112611f3b575f5ffd5b8a0173ffffffffffffffffffffffffffffffffffffffff611f5b82611a7f565b16865273ffffffffffffffffffffffffffffffffffffffff611f7f60208301611a7f565b16602087015273ffffffffffffffffffffffffffffffffffffffff611fa660408301611a7f565b166040870152611fb860608201611a7f565b73ffffffffffffffffffffffffffffffffffffffff16606087015260808181013590870152611fea60a0820182611e0c565b60e060a0890152611fff60e089018284611e6c565b91505061200e60c08301611aa7565b80151560c08901529150955050602093840193929092019160019190910190611eff565b5050505060409290920192909252949350505050565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261207b575f5ffd5b83018035915067ffffffffffffffff821115612095575f5ffd5b602001915036819003821315611e05575f5ffd5b5f602082840312156120b9575f5ffd5b813563ffffffff81168114611d31575f5ffd5b5f8151808452602084019350602083015f5b82811015612123578151865f5b600281101561210a5782518252602092830192909101906001016120eb565b50505060409590950194602091909101906001016120de565b5093949350505050565b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b5f82825180855260208501945060208160051b830101602085015f5b8381101561224a577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08584030188528151805184526020810151602085015260408101516040850152606081015160608501526080810151608085015260a081015160a085015260c081015161010060c086015261221761010086018261212d565b905060e0820151915084810360e0860152612232818361212d565b60209a8b019a90955093909301925050600101612195565b50909695505050505050565b6020815273ffffffffffffffffffffffffffffffffffffffff825116602082015260208201516040820152604082015160608201525f60608301516122a3608084018263ffffffff169052565b50608083015163ffffffff811660a08401525060a083015173ffffffffffffffffffffffffffffffffffffffff811660c08401525060c083015161010060e08401526122f36101208401826120cc565b905060e08401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08483030161010085015261232f8282612179565b95945050505050565b60208152815160208201525f6020830151610140604084015261235f61016084018261212d565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe084830301606085015261239a828261212d565b91505060608401516123c4608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e084015161010084015261010084015161243361012085018215159052565b50610120840151801515610140850152509392505050565b5f6020828403121561245b575f5ffd5b611d3182611aa7565b5f5f85851115612472575f5ffd5b8386111561247e575f5ffd5b5050820193919092039150565b80357fffffffff0000000000000000000000000000000000000000000000000000000081169060048410156124ea577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b818382375f9101908152919050565b5f60208284031215612510575f5ffd5b505191905056fea2646970667358221220c5216400c8c95489f44b0f81094c2a2c37111eb3465d12ee540ce0ab3b7d571264736f6c634300081d0033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_inputSettler";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "LIFI_INTENT_ESCROW_SETTLER";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaLiFiIntentEscrow";
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
            readonly name: "_lifiIntentData";
            readonly type: "tuple";
            readonly internalType: "struct LiFiIntentEscrowFacet.LiFiIntentEscrowData";
            readonly components: readonly [{
                readonly name: "dstCallReceiver";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "recipient";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "depositAndRefundAddress";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "nonce";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "expires";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "fillDeadline";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "inputOracle";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "outputOracle";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "outputSettler";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "outputToken";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "outputAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
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
                readonly name: "outputContext";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaLiFiIntentEscrow";
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
            readonly name: "_lifiIntentData";
            readonly type: "tuple";
            readonly internalType: "struct LiFiIntentEscrowFacet.LiFiIntentEscrowData";
            readonly components: readonly [{
                readonly name: "dstCallReceiver";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "recipient";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "depositAndRefundAddress";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "nonce";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "expires";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "fillDeadline";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "inputOracle";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "outputOracle";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "outputSettler";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "outputToken";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "outputAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
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
                readonly name: "outputContext";
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
        readonly name: "BridgeToNonEVMChainBytes32";
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
            readonly type: "bytes32";
            readonly indexed: false;
            readonly internalType: "bytes32";
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
        readonly name: "InvalidDepositAndRefundAddress";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidReceiver";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NativeAssetNotSupported";
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
    }];
    static createInterface(): LiFiIntentEscrowFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): LiFiIntentEscrowFacet;
}
export {};
